import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./styles.css";

import styled from "@emotion/styled";

//Slider images
import Slide1 from "../../images/Interior AF-1.jpg";
import Slide2 from "../../images/Residência RR-2.jpg";
import Slide3 from "../../images/Residência JE-3.jpg";

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: strecth;
  z-index: 2;
`;

const StyledSwiper = styled(Swiper)`
  transition: all 0.7s;

  @media (max-width: 480px) {
    height: calc(55vh - 133px);
  }

  @media (min-width: 480px) and (max-width: 608px) {
    height: calc(70vh - 133px);
  }

  @media (min-width: 608px) and (max-width: 992px) {
    height: calc(80vh - 133px);
  }

  @media (min-width: 992px) {
    height: calc(90vh - 133px);
  } ;
`;

export default function Slider() {
  const isNavigationEnabled = useBreakpointValue(
    {
      base: false,
      md: true,
    },
    {
      fallback: true,
    }
  );

  return (
    <StyledSwiper
      slidesPerView={1}
      effect="fade"
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={isNavigationEnabled}
      modules={[Autoplay, Navigation]}
    >
      <SwiperSlide>
        <SlideImage src={Slide1} />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src={Slide2} />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src={Slide3} />
      </SwiperSlide>
    </StyledSwiper>
  );
}
