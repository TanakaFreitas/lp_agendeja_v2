// Planos do Agende Já (tabela plano_plataforma, lida em 20/10/2026). Preço muda aqui e só aqui.

export interface Plano {
  id: string;
  nome: string;
  preco: number;
  /** Máximo de profissionais ativos. */
  profissionais: number;
  resumo: string;
  destaque?: boolean;
}

export const DIAS_TESTE = 30;

export const planos: Plano[] = [
  {
    id: 'solo',
    nome: 'Solo',
    preco: 67,
    profissionais: 1,
    resumo: 'Para quem atende sozinho.',
    destaque: true,
  },
  {
    id: 'profissional',
    nome: 'Profissional',
    preco: 97,
    profissionais: 3,
    resumo: 'Para uma equipe pequena.',
  },
  {
    id: 'barber-pro',
    nome: 'Barber Pro',
    preco: 147,
    profissionais: 10,
    resumo: 'Para a casa com várias cadeiras.',
  },
];

export function rotuloProfissionais(p: Plano): string {
  return p.profissionais === 1 ? '1 profissional ativo' : `Até ${p.profissionais} profissionais ativos`;
}

export const precoFormatado = (p: Plano) => `R$ ${p.preco}`;
