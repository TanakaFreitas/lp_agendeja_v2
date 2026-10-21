// Única fonte das URLs da página (BRIEFING §3). Não acrescente rotas do app que não estejam aqui.

export const APP = 'https://barbearia.agendeja.app.br';

/** Cadastro do dono + criação da barbearia. O teste grátis nasce sozinho. */
export const CADASTRO = `${APP}/empresa`;

/** Login sem barbearia definida, para quem já tem conta. */
export const LOGIN = `${APP}/Login/0`;

export const WHATSAPP_NUMERO = '5531936181560';
export const WHATSAPP_EXIBICAO = '(31) 93618-1560';
export const WHATSAPP_TEXTO_PADRAO = 'Olá! Vim pelo site e quero saber mais sobre o Agende Já.';

/** Link do WhatsApp com o texto já preenchido. */
export function whatsapp(texto: string = WHATSAPP_TEXTO_PADRAO): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

export const SITE = 'https://lp.agendeja.app.br/';
