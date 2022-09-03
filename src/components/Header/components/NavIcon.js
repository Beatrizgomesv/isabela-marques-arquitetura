import { Box, Center } from "@chakra-ui/react";
import React from "react";
import CustomIcon from "../../CustomIcon";

export default function NavIcon({ icon, url }) {
  const onIconClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Center w="100px">
        <CustomIcon
          name={icon}
          size="25px"
          cursor="pointer"
          onClick={onIconClick}
        />
      </Center>
    </Box>
  );
}
