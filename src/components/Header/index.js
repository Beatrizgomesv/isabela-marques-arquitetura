import * as React from "react";
import logoazul from "../../images/logoazul.png";
import { Flex, HStack, useMediaQuery } from "@chakra-ui/react";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

function Header() {
  const [isDrawerEnabled] = useMediaQuery(["(max-width: 608px)"]);
  return (
    <div>
      <HStack px={isDrawerEnabled ? "40px" : "0px"}>
        <Flex w="30%" alignItems="center" justifyContent="flex-end" py="20px">
          <img alt="Logo" src={logoazul} style={{ width: "330px" }} />
        </Flex>
        {isDrawerEnabled ? <MobileNav /> : <DesktopNav />}
      </HStack>
    </div>
  );
}

export default Header;
