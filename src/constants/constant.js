export function emailToUser() {
  return {
    subject: `PARABÉNS! SEU PRESENTE GRATUITO ESTÁ AQUI.`,
    content: `
    <div>
      <p
        style="
          font-family: Arial, sans-serif;
          font-size: 16px;
          text-align: center;
          color: #336699;
        "
      >
        Querido usuário, Obrigado por jogar o jogo. Você ganhou um lindo colar
        com o seu signo do zodíaco!
      </p>
      <p
        style="
          font-family: Arial, sans-serif;
          font-size: 16px;
          text-align: center;
          color: #336699;
        "
      >
        Garanta já o seu presente
        <a
          href="https://sementy.store/cart/47062053257528:1?channel=buy_button"
          style="text-decoration: none; color: #ff6600"
          >Clique aqui</a
        >
        para ir para o formulário de pedido.
      </p>
      <div style="text-align: center; margin-top: 20px">
        <a
          href="https://sementy.store/cart/47062053257528:1?channel=buy_button"
          style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #ff6600;
            color: #fff;
            font-family: Arial, sans-serif;
            font-size: 16px;
            text-decoration: none;
            border-radius: 5px;
          "
          >Obter Agora</a
        >
      </div>
    </div>
    `,
  };
}

export function emailToAdmin(email) {
  return {
    subject: `CONTEST ENTRY`,
    content: `${email} has entered the contest.`,
  };
}
