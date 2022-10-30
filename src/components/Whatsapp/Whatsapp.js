import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";

import isabelaavatar from "../../images/isabelaavatar.jpg";

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      phoneNumber={"+5519971032830"}
      accountName={"Isabela Marques"}
      chatboxHeight={0}
      avatar={isabelaavatar}
      statusMessage={" "}
      chatMessage={"Seja bem vindo,como posso ajudar? "}
      placeholder={"Mensagem"}
    />
  );
}
