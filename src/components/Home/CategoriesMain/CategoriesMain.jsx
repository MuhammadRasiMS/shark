import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import smallSlide from "./smallSlide";
import { Navigation, Pagination, Autoplay } from "swiper";
import { EffectCards } from "swiper";
import "./CategoriesMain.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Link } from "react-router-dom";

const CategoriesMain = ({ catSlider }) => {
  const swiperRef = useRef(null);

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;

    // Remove background style from swiper-slide-shadow
    const slideShadows = swiperRef.current.el.querySelectorAll(
      ".swiper-slide-shadow"
    );
    slideShadows.forEach((shadow) => {
      shadow.style.background = "none";
    });
  };
  return (
    <div className="cat-container">
      <Swiper
        style={{ margin: 0, padding: 0, boxShadow: "none" }}
        className="mySwiper"
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        effect={"cards"}
        grabCursor={true}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={handleSwiperInit}
      >
        {catSlider.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="cat-content">
                <div className="icon-title">
                  <img
                    src="../../src/assets/icons/category.svg"
                    className="cat-icon"
                    alt=""
                  />
                  <h2>Categories</h2>
                </div>
                <div className="products1">
                  <img src={item.image} alt="" />
                </div>
                <div className="cat-bottom">
                  <div className="name-rate">
                    <h2>{item.title}</h2>
                    <h4>{item.rate}</h4>
                  </div>
                  <Link to={'/category'} style={{ textDecoration: 'none', outline: 'none' }}>
                    <div className="arrow">▶</div>
                  </Link>
                </div>
              </div>
              <img src={item.url} alt={item.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="small-container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 500,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
          className="small-swiper"
        >
          {smallSlide.map((item)=>{
            return (
              <SwiperSlide key={item.id}>
                <div className="small-image">
                  <img src={item.image} alt="image" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoriesMain;
