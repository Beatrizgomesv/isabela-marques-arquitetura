import { Flex } from "@chakra-ui/react";
import React from "react";
import NavIcon from "./NavIcon";
import NavItem from "./NavItem";

export default function DesktopNav() {
  return (
    <>
      <Flex w="40%" h="100%" alignItems="center" justifyContent="center">
        <NavItem text="HOME" />
        <NavItem text="PROJETOS" />
        <NavItem text="CONTATO" />
      </Flex>
      <Flex>
        <NavIcon
          icon="AiOutlineInstagram"
          url="https://www.instagram.com/isabelamarquesarquiteta/"
        />
        <NavIcon
          icon="AiOutlineWhatsApp"
          url="https://api.whatsapp.com/send/?phone=5519971032830&text=Olá, Gostaria de mais informações"
        />
      </Flex>
    </>
  );
}