"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slidar.css";
export default function Slidar() {
  return (
    <>
      <Swiper className="mySwiper_1">
        <SwiperSlide className="set">
          <img loading="lazy"   src="/images/(6).jpg" alt=".." />
          <div className="bol position-absolute text-light">
            <h1>2024</h1>
            <h2>Lookbook.</h2>
            <a href="#" className="primary-btn">
              See More
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img loading="lazy"  src="/images/(2).jpg" alt=".." />
          <div className="bol position-absolute text-light">
            <h1>2024</h1>
            <h2>Lookbook.</h2>
            <a href="#" className="primary-btn">
              See More
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/images/(3).jpg" alt=".." />
          <div className="bol position-absolute text-light">
            <h1>2024</h1>
            <h2>Lookbook.</h2>
            <a href="#" className="primary-btn">
              See More
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy"  src="/images/(4).jpg" alt=".." />
          <div className="bol position-absolute text-light">
            <h1>2024</h1>
            <h2>Lookbook.</h2>
            <a href="#" className="primary-btn">
              See More
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy"  src="/images/(5).jpg" alt=".." />
          <div className="bol position-absolute text-light">
            <h1>2024</h1>
            <h2>Lookbook.</h2>
            <a href="#" className="primary-btn">
              See More
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy"  src="/images/(1).jpg" alt=".." />
          <div className="bol position-absolute text-light">
            <h1>2024</h1>
            <h2>Lookbook.</h2>
            <a href="#" className="primary-btn">
              See More
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
