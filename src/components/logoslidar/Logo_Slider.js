 
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "./Slidar_2.css";
export default function Logo_Slider() {

  const sliderImages = [
    "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    "https://www.freepnglogos.com/uploads/starbucks-logo-png-25.png",
    "https://www.freepnglogos.com/uploads/tesla-logo-png-20.png",
    "https://pngimg.com/uploads/nike/nike_PNG7.png",
    "https://pngimg.com/uploads/amazon/amazon_PNG17.png",
  ];


  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="info-slider"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Brand Logo ${index}`}
              width={150}
              height={60}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
