import * as React from "react";
import { Grid, GridItem, SlideFade, Text } from "@chakra-ui/react";
import gallery1img from "../../images/gallery/gallery1.jpg";
import gallery2img from "../../images/gallery/gallery2.jpg";
import gallery3img from "../../images/gallery/gallery3.jpg";
import gallery4img from "../../images/gallery/gallery4.jpg";
import gallery5img from "../../images/gallery/gallery5.jpg";
import gallery6img from "../../images/gallery/gallery6.jpg";
import gallery7img from "../../images/gallery/gallery7.jpg";
import gallery8img from "../../images/gallery/gallery8.jpg";
import gallery9img from "../../images/gallery/gallery9.jpg";
import gallery10img from "../../images/gallery/gallery10.jpg";
import gallery11img from "../../images/gallery/gallery11.jpg";
import gallery12img from "../../images/gallery/gallery12.jpg";
import gallery13img from "../../images/gallery/gallery13.jpg";
import gallery14img from "../../images/gallery/gallery14.jpg";
import styled from "@emotion/styled";

const galleryImages = [
  gallery1img,
  gallery2img,
  gallery3img,
  gallery4img,
  gallery5img,
  gallery6img,
  gallery7img,
  gallery8img,
  gallery9img,
  gallery10img,
  gallery11img,
  gallery12img,
  gallery13img,
  gallery14img,
];

const GalleryCardOverlay = styled.div`
  flex: 1;
  background-color: rgba(156,144,124, 0.4);
  margin-left: -100%;
  z-index: 3;
  opacity: 0;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

const GalleryCardOverlayText = styled(Text)`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const GalleryCardOverlayContainer = styled.div`
  display: flex;
`;

const GalleryCardOverlayImage = styled.img`
  width: 100%;
  z-index: 2;
`;

export default function Gallery() {
  const [currentOverlayedImg, setCurrentOverlayedImg] = React.useState();
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={1} mt={20} mx={15}>
        {galleryImages.map((galleryImg, index) => (
          <GridItem
            w="100%"
            onMouseOver={() => {
              setCurrentOverlayedImg(index);
            }}
            onMouseOut={() => {
              setCurrentOverlayedImg(null);
            }}
          >
            <GalleryCardOverlayContainer>
              <GalleryCardOverlayImage src={galleryImg} />
              <GalleryCardOverlay props={{ currentOverlayedImg }}>
                {currentOverlayedImg === index && (
                  <SlideFade in={true} offsetY="50px" delay={0.2}>
                    <GalleryCardOverlayText></GalleryCardOverlayText>
                  </SlideFade>
                )}
              </GalleryCardOverlay>
            </GalleryCardOverlayContainer>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
