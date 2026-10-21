# Landing page do Agende Já

Site estático em Astro publicado em **https://lp.agendeja.app.br/**. O contrato de conteúdo
(o que pode e o que não pode ser prometido, links, preços, paleta) está em [BRIEFING.md](BRIEFING.md).

## Comandos

| Comando | O que faz |
|---|---|
| `npm install` | instala as dependências (Node 22.12 ou mais novo) |
| `npm run dev` | servidor local em http://localhost:4321 |
| `npm run build` | gera o site em `dist/` |
| `npm run preview` | serve o `dist/` localmente |
| `npm run check:copy` | depois do build, procura palavras proibidas (§6 e §13 do briefing) e links do app fora do contrato |
| `node scripts/contrast.mjs '#928163' '#FFFFFF'` | calcula o contraste WCAG entre duas cores |

## Onde mudar o quê

- **Preços, limites de profissionais e dias de teste:** `src/data/planos.ts`. Cards, textos e JSON-LD leem daqui.
- **URLs do app e do WhatsApp:** `src/data/links.ts`. Não acrescente rotas do app que não existam.
- **Perguntas frequentes:** `src/data/faq.ts`.
- **Cores, espaçamento e raios:** tokens em `src/styles/global.css` (claro em `:root`, escuro redefinido logo abaixo).
- **Telas do app:** são mockups em HTML/CSS em `src/components/mockups/`, não screenshots.
- **Prova social:** `src/components/ProvaSocial.astro` está pronto, mas fora da página. Só entra com depoimentos reais e autorizados.

## Deploy no Cloudflare Pages

1. Suba este repositório para o GitHub (ou GitLab).
2. No painel da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configuração do build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variável de ambiente: `NODE_VERSION` = `22`
4. Depois do primeiro deploy: **Custom domains → Set up a custom domain** → `lp.agendeja.app.br`. Como a zona
   `agendeja.app.br` já está na Cloudflare, o CNAME é criado sozinho. Não mexa em `barbearia.agendeja.app.br`.
5. Opcional: ative o **Web Analytics** do projeto no painel (não usa cookie, não precisa de banner).

Depois de publicar, teste o preview de compartilhamento com um validador de Open Graph
(por exemplo, https://www.opengraph.xyz/) usando `https://lp.agendeja.app.br/`.
