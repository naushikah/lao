import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Mousewheel, Pagination } from "swiper";

const CarouselMousewheel = ({ slides }) => {
  return (
    <Swiper
      // direction="vertical"
      spaceBetween={30}
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.name}>{slide.component}</SwiperSlide>
      ))}
      {/* <SwiperSlide>Slide 2</SwiperSlide> */}
    </Swiper>
  );
};

export default CarouselMousewheel;
