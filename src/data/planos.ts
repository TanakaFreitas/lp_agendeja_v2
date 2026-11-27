// Planos do Agende Já (tabela plano_plataforma, lida em 20/10/2026). Preço muda aqui e só aqui.

export interface Plano {
  id: string;
  nome: string;
  preco: number;
  /** Máximo de profissionais ativos. */
  profissionais: number;
  resumo: string;
  destaque?: boolean;
  /** Preço que a Black Friday guarda na conta de quem se cadastra até `BLACK_FRIDAY.cadastroAte`. */
  precoBlackFriday: number;
}

export const DIAS_TESTE = 30;

/**
 * Black Friday, decidida pelo dono em 27/11/2026: quem cria a conta até 07/12/2026 guarda, para
 * sempre, o `precoBlackFriday` do plano (Solo R$ 37, Profissional R$ 67, Barber Pro R$ 97) e mantém
 * os 30 dias grátis. O app não aplica sozinho: a equipe grava esse valor na adesão ao assinar pelo
 * WhatsApp. NUNCA escrever "metade" ou "50%": R$ 37 é 55% de R$ 67.
 * REMOVER em 08/12/2026: troque por `null` e publique; faixa, preços e textos voltam ao normal.
 */
export const BLACK_FRIDAY: { cadastroAte: string; aPartirDe: string } | null = {
  cadastroAte: '07/12',
  aPartirDe: 'R$ 37',
};

export const planos: Plano[] = [
  {
    id: 'solo',
    nome: 'Solo',
    preco: 67,
    profissionais: 1,
    resumo: 'Para quem atende sozinho.',
    destaque: true,
    precoBlackFriday: 37,
  },
  {
    id: 'profissional',
    nome: 'Profissional',
    preco: 97,
    profissionais: 3,
    resumo: 'Para uma equipe pequena.',
    precoBlackFriday: 67,
  },
  {
    id: 'barber-pro',
    nome: 'Barber Pro',
    preco: 147,
    profissionais: 10,
    resumo: 'Para a casa com várias cadeiras.',
    precoBlackFriday: 97,
  },
];

export function rotuloProfissionais(p: Plano): string {
  return p.profissionais === 1 ? '1 profissional ativo' : `Até ${p.profissionais} profissionais ativos`;
}

export const precoFormatado = (p: Plano) => `R$ ${p.preco}`;
