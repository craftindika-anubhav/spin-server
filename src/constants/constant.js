export function emailToUser() {
  return {
    subject: `PARABÉNS! SEU PRESENTE GRATUITO ESTÁ AQUI.`,
    content: `Querido usuário, Obrigado por jogar o jogo. Você ganhou um lindo colar com o seu signo do zodíaco! Garanta já o seu presente Clique aqui para ir para o formulário de pedido.
    <br/>
    https://sementy.store/cart/47062053257528:1?channel=buy_button
    `,
  };
}

export function emailToAdmin(email) {
  return {
    subject: `CONTEST ENTRY`,
    content: `${email} has entered the contest.`,
  };
}
