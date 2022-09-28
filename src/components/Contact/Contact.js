import * as React from "react";
import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import Map from "./Map/Map";

export default function Contact() {
  return (
    <>
      <Box bg="brand.100" mx={15} color="black">
        <SimpleGrid columns={2} spacing={0}>
          <Map />
          <Text fontSize="5xl">CONTATO</Text>
          <Box className="map"></Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
