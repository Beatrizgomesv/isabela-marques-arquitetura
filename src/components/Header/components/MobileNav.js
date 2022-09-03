import React from "react";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import CustomIcon from "../../CustomIcon";

export default function MobileNav() {
  return (
    <Flex
      style={{ zIndex: 3 }}
      w="70%"
      h="100%"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<CustomIcon color="brand.100" name="AiOutlineMenu" />}
          variant="outline"
        />
        <MenuList mt={"2vw"} p={0} minW="100vw" w={"100vw"}>
          <MenuItem
            icon={<CustomIcon color="brand.100" name="AiOutlineHome" />}
          >
            Home
          </MenuItem>
          <MenuItem icon={<CustomIcon color="brand.100" name="BsBuilding" />}>
            Projetos
          </MenuItem>
          <MenuItem
            icon={<CustomIcon color="brand.100" name="AiOutlineContacts" />}
          >
            Contato
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
