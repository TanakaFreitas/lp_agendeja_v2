// Perguntas frequentes (BRIEFING §11), tiradas da Ajuda do app.
import { BLACK_FRIDAY, planos } from './planos';

const precos = planos.map((p) => `${p.nome} R$ ${p.precoBlackFriday}`).join(', ');

export const faq: { pergunta: string; resposta: string }[] = [
  ...(BLACK_FRIDAY
    ? [
        {
          pergunta: 'O preço da Black Friday vale por quanto tempo?',
          resposta: `Para sempre. Criando a conta até ${BLACK_FRIDAY.cadastroAte}, você testa 30 dias grátis, sem cartão, e, quando assinar pelo WhatsApp, paga o preço da Black Friday todo mês (${precos}). Quem cria a conta depois dessa data paga o preço normal.`,
        },
      ]
    : []),
  {
    pergunta: 'Não trabalho com agendamento, atendo por ordem de chegada. Serve para mim?',
    resposta:
      'Serve. No “Caderno do dia”, terminou o atendimento, você toca no serviço e na forma de pagamento, e ele está contado, sem horário e sem cadastrar o cliente. Lá em cima aparecem quantos atendimentos e quanto rendeu hoje e no mês, e cada marca entra em Recebimentos. Se um dia quiser, dá para usar a agenda junto.',
  },
  {
    pergunta: 'Preciso instalar alguma coisa?',
    resposta:
      'Não. O Agende Já funciona no navegador do celular ou do computador. Se quiser, adicione o ícone na tela inicial e ele abre como app: no iPhone pelo Safari, no Android pelo Chrome, no computador pelo Chrome ou pelo Edge.',
  },
  {
    pergunta: 'O cliente precisa criar conta?',
    resposta:
      'Não. Com “Aceitar cliente sem login” ligado, o cliente agenda pelo link de acesso rápido só com nome e telefone. Quem preferir pode criar conta com e-mail e senha.',
  },
  {
    pergunta: 'O cliente recebe aviso do agendamento?',
    resposta:
      'Sim. Ao agendar, o cliente e o profissional recebem a mensagem pelo WhatsApp, e o cliente recebe um lembrete antes do horário. Se o horário for cancelado, os dois são avisados.',
  },
  {
    pergunta: 'O Agende Já manda algum resumo da semana?',
    resposta:
      'Sim. Todo domingo de manhã chega no WhatsApp o fechamento da semana, e no dia 1º o do mês: primeiro uma mensagem com os números da barbearia, logo em seguida uma análise escrita por IA. Vai para o telefone cadastrado nos dados da barbearia, e todas as barbearias recebem, sem precisar ligar nada. Se não houve agendamento no período, não chega nada.',
  },
  {
    pergunta: 'A análise da IA é confiável?',
    resposta:
      'Ela interpreta os números do fechamento e serve como segunda opinião. Pode errar e não substitui contador nem consultor.',
  },
  {
    pergunta: 'Posso ter mais de um profissional?',
    resposta:
      'Sim, até o limite do seu plano. Cada profissional tem o próprio expediente, o próprio intervalo de almoço e os serviços que atende.',
  },
  {
    pergunta: 'O app cobra os meus clientes?',
    resposta:
      'Não. O pagamento é feito na barbearia, como sempre. O app registra o que você recebeu, por forma de pagamento, inclusive as mensalidades dos planos dos seus clientes.',
  },
  {
    pergunta: 'O cliente faltou. E agora?',
    resposta:
      'Na agenda, toque em “Cliente faltou”. Se ele tem plano, o crédito é consumido. Cancelamento dentro do prazo que você definiu não consome.',
  },
  {
    pergunta: 'O que acontece quando o teste acaba?',
    resposta:
      'Fale com o Agende Já pelo WhatsApp para escolher o plano e continuar. Seus dados ficam guardados.',
  },
  {
    pergunta: 'Meus dados ficam seguros?',
    resposta:
      'Cada barbearia vê só os próprios dados, e cada cliente vê só os dele.',
  },
  {
    pergunta: 'Funciona para salão de beleza?',
    resposta:
      'Sim. Serve para qualquer negócio que atende por profissional, com hora marcada ou por ordem de chegada. O Agende Já nasceu para barbearia, e a linguagem dele é de barbearia.',
  },
];
