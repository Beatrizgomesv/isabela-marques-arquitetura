import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";

export default function NavItem({ text }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="Fcenter"
      cursor="pointer"
      h="100%"
    >
      <Center w="100px">
        <Text fontSize="16px">{text}</Text>
      </Center>
    </Box>
  );
}
