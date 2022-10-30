import * as React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import isabela from "../../images/isabela.jpg";
import { Waypoint } from "react-waypoint";

const ImageBox = animated(
  styled(Box)(() => ({
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  }))
);

const AboutContainer = animated(
  styled(Flex)(() => ({
 
  }))
);


export default function Banner() {
  const imageStarterStyles = { opacity: 0, x: -300 };
  const imageFinalStyles = { opacity: 1, x: 0 };
  const [imageStyles, animateImage] = useSpring(() => ({
    from: imageStarterStyles,
  }));

  const aboutStarterStyles = { opacity: 0, x: 300 };
  const aboutFinalStyles = { opacity: 1, x: 0 };
  const [aboutStyles, animateAbout] = useSpring(() => ({
    from: aboutStarterStyles,
  }));


  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      h="400px"
      marginTop={150}
      marginBottom={150}
    >
      <GridItem colStart={2} colEnd={4}>
        <Flex  h={"100%"}>
          <Waypoint
            topOffset={300}
            bottomOffset={300}
            onEnter={() => animateImage(imageFinalStyles)}
            onLeave={() => animateImage(imageStarterStyles)}
          >
            <ImageBox style={imageStyles} flex={1}>
              <img src={isabela} alt={"Foto da Isabela Marques"} />
            </ImageBox>
          </Waypoint>
          <Waypoint  topOffset={300}
            bottomOffset={300}
            onEnter={() => animateAbout(aboutFinalStyles)}
            onLeave={() => animateAbout(aboutStarterStyles)}>
          <AboutContainer flex={1} h={"100%"} flexDir={"column"} alignItems={"center"} style={aboutStyles}>
          <Text fontSize="4xl" fontFamily={'Montserrat, sans-serif'} fontWeight={"bold"} color={'brand.100'}>SOBRE</Text>
           <Flex flex={1} alignItems={"center"} justifyItems={"center"} padding={10}>
            <Text fontSize="lg" textAlign={"justify"} fontFamily={'Montserrat, sans-serif'}>
              Formada desde 2019 pela Universidade Paulista-UNIP, a arquiteta
              Isabela Marques está a frente do escritório de Arquitetura e
              Interiores que leva seu nome. Com estilo contemporâneo, busca
              constantemente estar atualizada às tendências do mercado,
              participando de congressos, mostras, feiras e principalmente,
              buscando referências e inspirações.
            </Text>
            </Flex>
          </AboutContainer>
          </Waypoint>
        </Flex>
      </GridItem>
    </Grid>
  );
}
