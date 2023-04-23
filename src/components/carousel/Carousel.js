import React from "react";
import "swiper/css";
import "./SwiperStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "./Carousel.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import caro1 from "../../assets/caro1.jpg";
import caro2 from "../../assets/caro2.jpg";
import caro3 from "../../assets/caro3.jpg";
import caro4 from "../../assets/caro4.jpg";

const Carousel = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro1})` }}
        >
          <div id="main-titles">WE FABRICATEPERFORM SOLUTIONS</div>
          <div id="main-titles-two">
            COLLABORATE . PRODUCE . FINALIZE . DELIVER
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro2})` }}
        >
          <div id="main-titles">WE FABRICATEPERFORM SOLUTIONS</div>
          <div id="main-titles-two">
            COLLABORATE . PRODUCE . FINALIZE . DELIVER
          </div>
          dsd
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro3})` }}
        >
          <div id="main-titles">
            WE FABRICATEPERFORM SOLUTIONS
          </div>
          <div id="main-titles-two">
            COLLABORATE . PRODUCE . FINALIZE . DELIVER
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro4})` }}
        >
          <div id="main-titles" >
            WE FABRICATEPERFORM SOLUTIONS
          </div>
          <div id="main-titles-two">
            COLLABORATE . PRODUCE . FINALIZE . DELIVER
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
