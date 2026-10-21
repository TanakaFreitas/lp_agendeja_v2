# Briefing — landing page do Agende Já

Você vai construir, neste repositório, a landing page do **Agende Já** em
**Astro**, publicada em **https://lp.agendeja.app.br/**. Este documento é o
contrato: fatos do produto, links, preços, identidade visual e o que **não**
pode ser prometido. Foi levantado em 20/10/2026 direto do código e do banco do
app (repositório `C:\projetosApp\agende_flutter`).

Regra de ouro: **a página só promete o que o app faz hoje.** Na dúvida sobre
uma funcionalidade, pergunte ao usuário antes de escrever.

---

## 1. Missão e público

- **Objetivo da página:** levar o dono de barbearia (ou salão) a criar a conta
  e começar o **teste grátis de 30 dias**. Objetivo secundário: conversa pelo
  WhatsApp.
- **Público:** dono de barbearia pequena ou média, no Brasil. Vive no celular e
  no WhatsApp, agenda hoje por mensagem, caderno ou de cabeça. Não é técnico.
- **Idioma:** só português do Brasil.

## 2. O produto

**Agende Já** é um sistema de agendamento e gestão para barbearias. O cliente
agenda pelo link da barbearia (com conta ou só com nome e telefone) e recebe a
mensagem no WhatsApp. A barbearia controla agenda, profissionais, clientes,
planos de assinatura e o que recebeu.

- Funciona **no navegador** do celular ou do computador, e **instala na tela
  inicial** como app (PWA: iPhone pelo Safari, Android pelo Chrome, computador
  pelo Chrome ou Edge). **Não está na App Store nem no Google Play.**
- App em produção: `https://barbearia.agendeja.app.br`.
- Multi-empresa: cada barbearia vê só os próprios dados, e cada cliente só os
  dele.

## 3. Links e CTAs — contrato

| Ação | URL | Observação |
|---|---|---|
| **CTA principal** — "Testar grátis por 30 dias" / "Criar minha barbearia" | `https://barbearia.agendeja.app.br/empresa` | cadastro do dono + criação da barbearia; o trial nasce sozinho |
| Entrar (quem já tem conta) | `https://barbearia.agendeja.app.br/Login/0` | login sem barbearia definida |
| WhatsApp (dúvidas, assinar plano, suporte) | `https://wa.me/5531936181560?text=...` | (31) 93618-1560; pré-preencha um texto, ex.: "Olá! Vim pelo site e quero saber mais sobre o Agende Já." (URL-encoded) |

- Centralize as URLs num único arquivo (ex.: `src/data/links.ts`).
- Não publique e-mail pessoal de ninguém. Não há e-mail de suporte público.
- Não invente rota do app. As únicas acima existem.

## 4. Funcionalidades para o dono — o que existe hoje

Use estas, com estas palavras. Entre aspas, os rótulos reais dos botões no app.

**Agenda**
- Agendados do dia com filtro por profissional e por dia; "Agendamentos do
  mês" com busca por cliente.
- **Painel de ocupação:** *Dia* mostra a equipe inteira lado a lado; *Semana*
  mostra um profissional hora a hora.
- **Encaixe rápido** na tela inicial, sem cadastrar cliente.
- **Agendamento manual** para quem marca por telefone ou no balcão (cliente
  avulso, só nome e telefone).
- No agendamento: "Receber pagamento", "Usar crédito do plano", "Cliente
  faltou", "Cancelar agendamento", "Conversar no WhatsApp".

**Serviços**
- Nome, valor, duração (a duração define o tamanho do horário), ícone,
  destaque e ordem.
- **Preço promocional por dia da semana** (ex.: corte mais barato na
  terça).

**Profissionais**
- Expediente por dia com intervalo de almoço e "Copiar para os outros dias".
- "Serviços que atende" para cada profissional.
- **Recesso** (férias, feriado, folga) e **dia especial** com horário
  diferente.
- Quantidade limitada pelo plano (§7).

**Clientes**
- Uma lista só com os três tipos: com conta, sem login e avulso.
- Busca por nome ou telefone, filtros "Com plano" e "Bloqueados", WhatsApp
  direto, "Colocar num plano", bloquear acesso.

**Recebimentos**
- O pagamento é **registrado** no atendimento, por forma de pagamento, com
  valor ajustável. A tela mostra o total do mês e o total por forma.
- Lançou errado? "Estornar lançamento", com motivo. O estornado sai da soma e
  continua visível em "Estornados".
- ⚠ É **registro**, não cobrança. O app não cobra ninguém.

**Planos de assinatura para os seus clientes** (diferencial forte, merece
seção própria)
- A barbearia cria planos (ex.: "4 cortes por mês"): valor, quantidade de
  serviços por ciclo, validade, dias da semana em que vale e serviços
  cobertos.
- No atendimento coberto pelo plano, um toque baixa o crédito. "Cliente
  faltou" também consome crédito; cancelamento dentro do prazo não consome.
- Ajustes de saldo: "Adicionar crédito" (cortesia), baixa manual com
  justificativa, estorno e extrato de cada movimento.
- O cliente vê o próprio plano no app: saldo, vencimento, dias válidos,
  serviços cobertos e extrato.
- **O cliente pode pedir o plano pelo app** (se a barbearia ligar a opção). O
  pedido chega para a barbearia aguardando pagamento, e a validade conta a
  partir do pagamento.
- O pagamento da mensalidade é feito **na barbearia**, e o app registra.

**Vitrine de produtos**
- O cliente vê os produtos e toca em "Pedir pelo WhatsApp". A venda acontece
  na barbearia: é **vitrine, não loja**.

**Divulgação**
- **Link personalizado** da barbearia (o "Nome do link"), em duas versões:
  "Cadastro com senha" e "Acesso rápido" (sem conta).
- Botão "Copiar" e **"QR Code (PDF)"** para imprimir e deixar no balcão.

**Configuração e apoio**
- **Guia de primeiros passos** na tela inicial: 7 passos (serviço,
  profissional, expediente, quem faz o quê, logo, telefone, divulgar o link).
  Some sozinho quando tudo está pronto.
- Configurações: "Aceitar cliente sem login", "Permitir cancelar até"
  (antecedência mínima), "Período máximo para agendar", mensagem para o
  cliente na tela inicial.
- **Central de ajuda** com passo a passo de cada tela, perguntas frequentes e
  "Falar com o suporte" pelo WhatsApp.
- **Tema claro, escuro ou do sistema.**

## 5. A experiência do cliente da barbearia

- **Agenda sem criar conta:** só nome e telefone, pelo link de "Acesso rápido"
  (quando a barbearia libera). Ou cria conta com e-mail e senha.
- Escolhe serviço, profissional, dia e horário. Só aparecem horários livres de
  verdade, respeitando expediente, almoço, folgas e a duração do serviço.
- **WhatsApp automático:** ao agendar, o cliente **e o profissional** recebem
  a mensagem, e o cliente recebe **um lembrete antes do horário**. Ao
  cancelar, os dois são avisados.
- Vê os próprios agendamentos e **cancela** dentro do prazo que a barbearia
  definiu.
- Vê o plano e o saldo, e pede um plano pelo app.

## 6. O que NÃO prometer

O app tem um teste que reprova o texto da própria Ajuda se ele contiver
algumas destas palavras. A landing segue a mesma régua.

**Nunca escreva (nem insinue):**
- pagamento online, cobrança automática ou recorrente, **PIX**, **boleto**,
  gateway, "receba pelo app" (o app **registra**, não cobra; nem a mensalidade
  do Agende Já tem checkout);
- **"relatórios"** (existem totais do mês em Recebimentos e na agenda, e é
  isso que se diz);
- **App Store, Google Play, "baixe o app"** (é web e instala na tela inicial);
- login com Google, Apple ou Facebook (só e-mail e senha);
- acesso próprio do profissional ou colaborador (futuro, não existe);
- venda ou carrinho de produtos dentro do app;
- modo offline, backup, criptografia;
- lembrete "24h antes" ou qualquer antecedência específica;
- comissão de profissional, programa de fidelidade, multa por falta;
- integração com Google Agenda, Instagram ou qualquer outra que não seja o
  WhatsApp;
- **depoimentos, logos de clientes, notas, "+X barbearias" ou qualquer número
  inventado.** Se quiser prova social, deixe o componente pronto e peça os
  dados reais ao usuário.

**Em vez disso, diga:** "registre o que recebeu", "totais do mês", "funciona
no navegador e instala na tela inicial como app", "o pagamento é feito na
barbearia, como sempre".

## 7. Planos e preços

Valores do catálogo da plataforma (tabela `plano_plataforma`), lidos em
20/10/2026:

| Plano | Preço | Profissionais ativos | Agendamentos |
|---|---|---|---|
| **Solo** | R$ 67/mês | 1 | ilimitados |
| **Profissional** | R$ 97/mês | até 3 | ilimitados |
| **Barber Pro** | R$ 147/mês | até 10 | ilimitados |

- **Toda barbearia nova começa com 30 dias grátis**, criados automaticamente
  no cadastro. Não pede cartão.
- **Todos os planos têm as mesmas funcionalidades.** A diferença é só a
  quantidade de profissionais ativos.
- Para assinar ou trocar de plano, **fale pelo WhatsApp**. Não há checkout.
  O botão de cada plano pode ir para o cadastro (teste grátis) ou para o
  WhatsApp com o nome do plano no texto.
- Ao fim do teste, **os dados ficam guardados**.
- Destaque visual sugerido: Profissional.
- Coloque os planos num único arquivo de dados (ex.: `src/data/planos.ts`).
  Preço muda, e tem de mudar num lugar só.

## 8. Identidade visual

### Paleta (a mesma do app)

| Papel | Claro | Escuro | Uso |
|---|---|---|---|
| primary (azul-marinho) | `#1E2A38` | `#394D73` | fundo de hero/CTA, botão principal |
| secondary (**dourado** da marca) | `#928163` | `#928163` | destaque, preço, detalhes |
| tertiary | `#6D604A` | `#6D604A` | dourado escuro |
| fundo da página | `#F1F4F8` | `#0B191E` | |
| fundo de card | `#FFFFFF` | `#0D1E23` | |
| borda / divisor | `#C8D7E4` | `#17282E` | |
| texto principal | `#0B191E` | `#FFFFFF` | |
| texto de apoio | `#384E58` | `#7292A0` | |
| primary como texto/link | `#1E2A38` | `#8FA6D1` | link, botão de contorno no escuro |
| success | `#336A4A` (texto no escuro: `#5FAE80`) | | check, "incluso" |
| error | `#8C3746` | | |
| warning | `#F3C344` | | faixa amarela |

Defina tudo como CSS custom properties em `:root` e redefina-as no escuro
(`prefers-color-scheme: dark`).

**Contraste (medido no app; respeite):**
- Texto sobre primary, success ou error: **branco `#FFFFFF`**.
- Sobre warning (amarelo): texto escuro `#0B191E`. **Nunca branco** (1,65:1).
- **Dourado `#928163` como texto só em tamanho grande (≥ 18 px, peso 600)**:
  dá 3,8:1 sobre branco. Para texto pequeno, use o dourado como fundo, borda
  ou ícone, ou o `tertiary`.
- Azul primary como texto no tema escuro **não passa**: use `#8FA6D1`.
- Meta: WCAG AA em tudo.

### Tipografia
- **Urbanist** nos títulos (pesos 600/700) e **Plus Jakarta Sans** no corpo
  (400/500/600).
- Self-hosted via `@fontsource/urbanist` e `@fontsource/plus-jakarta-sans`
  (preferível), ou Google Fonts com `display=swap`.

### Ritmo
- Espaçamento numa escala só: 2, 4, 8, 12, 16, 24, 32 px (e múltiplos para
  seções).
- Raios: 4, 8, 16, 24 px e pílula.
- Sombras leves: preto a 10%.
- O app usa uma coluna de 800 px. A landing pode ser mais larga (até
  ~1200 px), com texto corrido em ~65 caracteres.

### Logo e imagens
Copie de `C:\projetosApp\agende_flutter` para `public/`:

| Arquivo | O que é |
|---|---|
| `assets\images\Logo1.png` | logo 512×512, fundo transparente: barbudo de óculos dentro de um arco azul/vermelho, "AGENDE JÁ / PREMIUM CUT & SHAVE" |
| `assets\images\SocialShareImage.png` | 1200×630 com listras de barber pole azul/vermelho; use como `og:image` |
| `web\icons\Icon-192.png`, `web\icons\Icon-512.png` (e `Icon-maskable-*`) | ícones |
| `web\IconAba32.png` | favicon 32 px |

- O logo é ilustração preta sobre transparente. No tema escuro, coloque-o
  sobre um disco ou cartão claro em vez de inverter as cores.
- O barber pole (listras azul e vermelho) é um motivo visual permitido para
  detalhes, com moderação.
- **Não há screenshots prontos do app.** Duas opções: pedir ao usuário capturas
  reais, ou desenhar mockups estilizados em HTML/CSS (moldura de celular com
  agenda, grade de horários, mensagem de WhatsApp) usando a paleta acima. Não
  mostre tela que o app não tem.
- Referência visual das telas do app (canvas de design):
  https://claude.ai/artifact/5Ty4JbXeiGVLph1ZsJf9zt

## 9. Tom de voz

- Fale com o dono, em **"você"**. Frases curtas, concretas, no imperativo
  quando for instrução ("Cadastre seus serviços", "Divulgue o link").
- Vocabulário de barbearia: balcão, encaixe, folga, cliente faltou, corte,
  barba, horário vago.
- Honesto e sem exagero. Nada de "revolucionário", "o melhor do Brasil" ou
  "IA". Sem emojis.
- Benefício antes da funcionalidade: "Pare de responder 'tem horário?' no
  WhatsApp" → "o cliente vê os horários livres e agenda sozinho".
- Dores reais para explorar: agenda no caderno ou no WhatsApp, cliente que
  esquece e falta, horário vago, controle de quem pagou, plano mensal
  controlado de cabeça.

## 10. Estrutura sugerida da página

1. **Header** fixo: logo, âncoras (Funcionalidades, Planos, Dúvidas), "Entrar"
   e o CTA.
2. **Hero:** promessa + subtítulo + CTA "Testar grátis por 30 dias" + "Falar
   no WhatsApp". Linha de apoio: "Sem cartão. Funciona no navegador."
   Mockup de celular com a agenda.
3. **Dor → solução:** 3 ou 4 dores (§9) com a resposta do app.
4. **Como funciona em 3 passos:** crie a conta → configure com o guia de
   primeiros passos → divulgue o link ou o QR Code no balcão.
5. **Para o seu cliente:** agenda sem criar conta, WhatsApp de confirmação e
   lembrete, cancela sozinho dentro do prazo.
6. **Para a sua barbearia:** grade de funcionalidades (§4), agrupadas.
7. **Planos de assinatura para os seus clientes:** seção-destaque. Fidelize
   com plano mensal e controle os créditos sem planilha.
8. **Preços** (§7).
9. **Perguntas frequentes** (§11), em `<details>`.
10. **CTA final** + **rodapé** com WhatsApp, link "Entrar" e
    "© Agende Já".

## 11. Perguntas frequentes — respostas reais

Tiradas da Ajuda do app. Pode reescrever o estilo, sem mudar o fato.

- **Preciso instalar alguma coisa?** Não. Funciona no navegador do celular ou
  do computador. Se quiser, adicione um ícone na tela inicial e ele abre como
  app.
- **O cliente precisa criar conta?** Não. Com "Aceitar cliente sem login"
  ligado, pelo link de acesso rápido ele agenda só com nome e telefone.
- **O cliente recebe aviso do agendamento?** Sim. Ao agendar, o cliente e o
  profissional recebem a mensagem pelo WhatsApp, e o cliente recebe um
  lembrete antes do horário.
- **Posso ter mais de um profissional?** Sim, até o limite do plano. Cada um
  tem o próprio expediente e os próprios serviços.
- **O app cobra os meus clientes?** Não. O pagamento é feito na barbearia,
  como sempre. O app registra o que você recebeu, inclusive as mensalidades
  dos planos.
- **O cliente faltou. E agora?** Na agenda, toque em "Cliente faltou". Se ele
  tem plano, o crédito é consumido. Cancelamento no prazo não consome.
- **O que acontece quando o teste acaba?** Fale com o Agende Já pelo WhatsApp
  para escolher o plano e continuar. Seus dados ficam guardados.
- **Meus dados ficam seguros?** Cada barbearia vê só os próprios dados, e cada
  cliente só os dele.
- **Funciona para salão de beleza?** Sim, serve para qualquer negócio que
  atende com hora marcada por profissional. O produto nasceu para barbearia, e
  a linguagem dele é de barbearia.

## 12. Requisitos técnicos

- **Astro**, saída **estática** (`output: 'static'`). Tailwind é opcional
  (se usar, mapeie a paleta da §8 no tema). **Zero JS por padrão**; ilha só se
  for indispensável (menu mobile pode ser `<details>` ou CSS).
- **Deploy:** Cloudflare Pages, domínio `lp.agendeja.app.br`. A zona
  `agendeja.app.br` já está na Cloudflare. Comando de build `npm run build`,
  saída `dist/`. Não mexa em nada de `barbearia.agendeja.app.br`.
- **SEO:**
  - `<html lang="pt-BR">`;
  - `<title>` com "Agende Já" (ex.: "Agende Já — agendamento online para
    barbearias");
  - `meta description`;
  - canonical `https://lp.agendeja.app.br/`;
  - Open Graph e Twitter Card (`summary_large_image`) com o
    `SocialShareImage.png` em URL absoluta;
  - `@astrojs/sitemap`, `robots.txt`;
  - JSON-LD `SoftwareApplication` com as ofertas da §7 (preço em BRL).
- **Tema:** claro e escuro via `prefers-color-scheme`, com
  `<meta name="theme-color">` para os dois (`#F1F4F8` e `#0B191E`).
- **Responsivo** de 360 px a 1920 px, sem rolagem horizontal. Mobile primeiro:
  o público chega pelo celular.
- **Desempenho:** Lighthouse ≥ 95 nas quatro categorias. Imagens via
  `astro:assets` (WebP/AVIF, `width`/`height` definidos). Fontes com
  `preload` só do peso do hero.
- **Acessibilidade:** AA, foco visível, `alt` em toda imagem, hierarquia de
  títulos correta, alvos de toque ≥ 44 px.
- **Privacidade:** sem cookies de terceiros e sem banner de cookies. Se houver
  analytics, Cloudflare Web Analytics (sem cookie).
- Links externos para o app abrem na mesma aba; WhatsApp em nova aba com
  `rel="noopener"`.

## 13. Critérios de pronto

- [ ] `npm run build` sem erro e sem aviso.
- [ ] Todo CTA aponta para uma URL da §3. Nenhuma outra rota do app aparece.
- [ ] Preços e limites batem com a §7 e vêm de um arquivo de dados só.
- [ ] Busca no texto final (sem diferenciar maiúsculas e acentos) não acha:
  `pix`, `boleto`, `relatório`, `app store`, `play store`, `google play`,
  `cobrança automática`, `offline`, `backup`, `criptografia`, `24h`,
  `baixe o app`.
- [ ] Nenhum depoimento, número ou logo de cliente inventado.
- [ ] Revisado a 360, 768 e 1440 px, nos temas claro e escuro.
- [ ] Contraste AA conferido, com atenção ao dourado (§8).
- [ ] OG image aparece no preview (teste com um validador de Open Graph).

## 14. Fontes de verdade (se precisar consultar)

Tudo em `C:\projetosApp\agende_flutter`:

| Arquivo | Para quê |
|---|---|
| `lib\ajuda\conteudo_ajuda.dart` | texto real de cada tela, rótulos de botões, FAQ e tom de voz |
| `docs\01-visao-geral.md` | perfis de acesso |
| `docs\02-especificacao-funcional.md` | fluxos e regras de negócio |
| `docs\10-assinaturas.md` | planos de assinatura do cliente final |
| `docs\11-design-system.md` | paleta, tipografia e contraste |
| `docs\12-plataforma.md` | planos do SaaS e trial |
| `docs\13-primeiros-passos.md` | guia de configuração inicial |

Só leitura: **não edite nada naquele repositório.**
