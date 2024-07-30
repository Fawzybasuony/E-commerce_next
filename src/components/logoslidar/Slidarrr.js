"use client";

import "./Slidar_2.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Slidarrr() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="xxx"
      >
        <SwiperSlide>
          {" "}
          <img src="img/logos/logo-1.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="img/logos/logo-2.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="img/logos/logo-3.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="img/logos/logo-4.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="img/logos/logo-5.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/marka.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/marka_2.jpeg" alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="/img/mrka_3.jpeg" alt="" />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
