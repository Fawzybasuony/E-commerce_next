import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./slidar.css";
export default function Slider_Heder() {

  
  const slides = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
      title: "New Season Collection",
      description: "Discover the latest fashion trends for every style",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
      title: "Premium Accessories",
      description: "Complete your look with our exclusive accessories",
      buttonText: "Browse Accessories",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
      title: "Designer Brands",
      description: "Shop the world's leading fashion brands",
      buttonText: "Shop Brands",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg",
      title: "Special Offers",
      description: "Up to 50% off on selected items",
      buttonText: "View Deals",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg",
      title: "New Arrivals",
      description: "Be the first to shop our latest collections",
      buttonText: "Shop New In",
    },
  ];
  
  return (
    <>
    <div className="position-relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        style={{ width: "100%", margin: "0", padding: "0" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="group position-relative">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-100 object-fit-cover "
                style={{ minHeight: "700px" }}
              />
              <div
                className="position-absolute top-0 start-0 end-0 bottom-0 rounded-3"
                style={{
                  background:
                    "linear-gradient(to right, rgba(97, 167, 134, 0.7), transparent)",
                }}
              />

              {/* _Text in Header */}
              <div className="position-absolute top-50 start-0 end-0 translate-middle-y p-5 text-white">
                <h3 className="display-4 fw-bold mb-4 slide-title">
                  {slide.title}
                </h3>
                <p className="fs-3 mb-5 slide-description">
                  {slide.description}
                </p>
                <button className="btn btn-light text-purple rounded-pill fw-semibold px-4 py-2 slide-button">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}
