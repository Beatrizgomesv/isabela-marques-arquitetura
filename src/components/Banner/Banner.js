import * as React from "react";
import { Box, Flex, Divider, Text } from "@chakra-ui/react";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";

export default function Banner() {
  return (
    <>
      <Flex justify={"space-evenly"} marginY="9.5vh">
        <Box>
          <img src={icon1} alt={"Logo Architecture"} />
       
        </Box>
        <Box>
          <img src={icon2} alt={"Logo Architecture"} />
       
        </Box>
        <Box>
          <img src={icon3} alt={"Logo Architecture"} />
       
        </Box>
      </Flex>
      <Divider />
    </>
  );
}
