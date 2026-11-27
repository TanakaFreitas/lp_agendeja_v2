/**
 * Gera a arte de compartilhamento de cada artigo do blog
 * (public/og/blog/<artigo>.png, 1200×630): é ela que aparece quando o link é
 * colado no WhatsApp. Fundo azul-marinho (--primary), a faixa do poste de
 * barbearia, AGENDE JÁ e o título do frontmatter.
 *
 * Não roda no build: os PNGs são versionados (o build da Cloudflare não tem as
 * fontes do sistema). Rode de novo ao criar um artigo ou mudar o título, com
 * `npm run imagens`. O build para se faltar a arte de algum artigo.
 */
import { mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const pastaArtigos = join(raiz, "src", "content", "blog");
const pastaArtes = join(raiz, "public", "og", "blog");

const FUNDO = "#1e2a38";
const TEXTO = "#ffffff";
const APOIO = "#c9d3e0";
const VERMELHO = "#d4727a";
const AZUL = "#6e9ac7";

// Fora do navegador, o rasterizador usa as fontes do sistema.
const PILHA = "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const escapar = (texto) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** O `title:` do frontmatter, sem as aspas (e com '' de volta a '). */
function tituloDe(md, arquivo) {
  const frontmatter = md.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  const linha = frontmatter.match(/^title:\s*(.+?)\s*$/m)?.[1];
  if (!linha) throw new Error(`${arquivo}: sem "title:" no frontmatter`);
  return linha.replace(/^(["'])(.*)\1$/, "$2").replace(/''/g, "'");
}

/** Quebra por palavra, até `largura` caracteres por linha. */
function quebrar(texto, largura) {
  const linhas = [];
  for (const palavra of texto.split(/\s+/)) {
    const ultima = linhas.at(-1);
    if (ultima !== undefined && `${ultima} ${palavra}`.length <= largura) {
      linhas[linhas.length - 1] = `${ultima} ${palavra}`;
    } else {
      linhas.push(palavra);
    }
  }
  return linhas;
}

/** Título grande quando cabe em 3 linhas; senão, menor, em até 4. */
function linhasDoTitulo(titulo) {
  const grandes = quebrar(titulo, 30);
  if (grandes.length <= 3) return { linhas: grandes, tamanho: 62 };
  return { linhas: quebrar(titulo, 38), tamanho: 50 };
}

/** A faixa listrada do poste de barbearia, no alto. */
function faixa() {
  const listras = [];
  for (let x = -60, i = 0; x < 1260; x += 40, i++) {
    const cor = [VERMELHO, TEXTO, AZUL, TEXTO][i % 4];
    listras.push(`<polygon points="${x},0 ${x + 40},0 ${x + 64},24 ${x + 24},24" fill="${cor}"/>`);
  }
  return listras.join("");
}

function arteDoArtigo(titulo) {
  const { linhas, tamanho } = linhasDoTitulo(titulo);
  const altura = Math.round(tamanho * 1.2);
  const topo = 292;
  const tspans = linhas
    .map((l, i) => `<tspan x="96" y="${topo + i * altura}">${escapar(l)}</tspan>`)
    .join("\n    ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${FUNDO}"/>
  ${faixa()}

  <text x="96" y="120" font-family="${PILHA}" font-size="40" font-weight="800" letter-spacing="4" fill="${TEXTO}">AGENDE JÁ</text>
  <text x="96" y="168" font-family="${PILHA}" font-size="24" font-weight="600" letter-spacing="3" fill="${AZUL}">BLOG PARA BARBEARIAS</text>

  <text font-family="${PILHA}" font-size="${tamanho}" font-weight="700" fill="${TEXTO}">
    ${tspans}
  </text>

  <text x="96" y="570" font-family="${PILHA}" font-size="28" fill="${APOIO}">agendeja.app.br · agendamento online para barbearias</text>
</svg>`;
}

// Recria a pasta: artigo apagado ou renomeado não deixa arte órfã.
rmSync(pastaArtes, { recursive: true, force: true });
mkdirSync(pastaArtes, { recursive: true });

for (const arquivo of readdirSync(pastaArtigos).filter((a) => a.endsWith(".md"))) {
  const id = arquivo.replace(/\.md$/, "");
  const titulo = tituloDe(readFileSync(join(pastaArtigos, arquivo), "utf8"), arquivo);
  if (linhasDoTitulo(titulo).linhas.length > 4) {
    throw new Error(`${arquivo}: título longo demais para a arte (máx. 4 linhas)`);
  }
  await sharp(Buffer.from(arteDoArtigo(titulo)), { density: 144 })
    .resize(1200, 630)
    .png({ compressionLevel: 9 })
    .toFile(join(pastaArtes, `${id}.png`));
  console.log(`  og/blog/${id}.png`);
}
