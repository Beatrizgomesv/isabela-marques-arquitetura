import * as React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { Header, Slider } from "../components";
import { extendTheme } from "@chakra-ui/react";

import "../css/index.css";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import Copy from "../components/Copy";
import Whatsapp from "../components/Whatsapp/Whatsapp";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#0d1f43",
    },
  },
});

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
    <Box style={{zIndex:4, position: "absolute", bottom: 0, right: 0}}>
     <Whatsapp/>
     </Box>
      <Box>
        <Header />
        <Slider />
        <Flex direction={"column"}>
        <Banner />
        <Gallery />
        <Footer />
        <Copy/>
        </Flex>
      </Box>
      
      
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Isabela Marques Arquitetura</title>;
