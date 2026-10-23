// Confere o HTML gerado em dist/ contra o BRIEFING (§6 e §13):
// 1. nenhuma palavra proibida no texto (sem diferenciar maiúsculas e acentos);
// 2. todo link para *.agendeja.app.br é uma das URLs de src/data/links.ts.
// Uso: npm run build && npm run check:copy
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const PROIBIDAS = [
  'pix',
  'boleto',
  'relatorio',
  'app store',
  'play store',
  'google play',
  'cobranca automatica',
  'offline',
  'backup',
  'criptografia',
  '24h',
  'baixe o app',
];

const APP_PERMITIDAS = new Set([
  'https://barbearia.agendeja.app.br/empresa',
  'https://barbearia.agendeja.app.br/Login/0',
]);

const normalizar = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

async function htmls(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await htmls(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const erros = [];
const arquivos = await htmls('dist');
if (arquivos.length === 0) erros.push('Nenhum HTML em dist/. Rode npm run build antes.');

for (const arquivo of arquivos) {
  const html = await readFile(arquivo, 'utf8');

  // Texto visível + atributos que viram texto (alt, aria-label, title, content das metas).
  const atributos = [...html.matchAll(/\s(?:alt|aria-label|title|content)="([^"]*)"/g)].map((m) => m[1]);
  const texto = html
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<script(?![^>]*ld\+json)[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  const alvo = normalizar(`${texto} ${atributos.join(' ')}`);

  // Busca por trecho: "relatorio" também pega "relatorios". Só "pix" é palavra
  // inteira, para o "Meta Pixel" do aviso de cookies não contar.
  const compacto = alvo.replace(/\s+/g, ' ');
  for (const termo of PROIBIDAS) {
    const achou = termo === 'pix' ? /\bpix\b/.test(compacto) : compacto.includes(termo);
    if (achou) erros.push(`${arquivo}: termo proibido "${termo}"`);
  }

  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^https?:\/\/[^/]*agendeja\.app\.br/.test(href) && !href.startsWith('https://agendeja.app.br')) {
      if (!APP_PERMITIDAS.has(href)) erros.push(`${arquivo}: link do app fora do contrato: ${href}`);
    }
    if (href.startsWith('https://wa.me/') && !href.startsWith('https://wa.me/5531936181560?text=')) {
      erros.push(`${arquivo}: link de WhatsApp inesperado: ${href}`);
    }
  }

  for (const [tag] of html.matchAll(/<a\s[^>]*href="https:\/\/wa\.me[^>]*>/g)) {
    if (!/target="_blank"/.test(tag) || !/rel="[^"]*noopener/.test(tag)) {
      erros.push(`${arquivo}: link de WhatsApp sem target="_blank" rel="noopener"`);
    }
  }
}

if (erros.length) {
  console.error(erros.join('\n'));
  process.exit(1);
}
console.log(`OK: ${arquivos.length} arquivo(s) HTML conferido(s), nenhum termo proibido e links dentro do contrato.`);
