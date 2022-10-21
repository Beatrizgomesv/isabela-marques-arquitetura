import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Header, Slider } from "../components";
import { extendTheme } from "@chakra-ui/react";

import "../css/index.css";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import Copy from "../components/Copy";

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
      <>
        <Header />
        <Slider />
        <Banner />
        <Gallery />
        <Footer />
        <Copy/>
      </>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Isabela Marques Arquitetura</title>;
