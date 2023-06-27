
import React from "react";
import "./HotDeals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const HotDeals = ({ hotData }) => {

  return (
    <div className="hot-container">
      <h2 className="hot-heading">
        <img src="../../src/assets/icons/Contests.svg" alt="" />
        Hot Deals!
      </h2>
      <Swiper
        className="hot-swiper"
        speed={3000}
        autoplay={{
          delay: 3500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        modules={[Pagination, Autoplay]}
      >
        {hotData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="hot-cards" key={item.id}>
                <div className="hot-play-free">
                  <button>Free to Play</button>
                </div>
                <div className="hot-products-container">
                  <img src={item.image} alt="product" />
                </div>
                <h1 className="hot-product-title">{item.title}</h1>
                <p className="hot-product-description">{item.description}</p>
                <div className="hot-card-bottom-get">
                  <div>
                    <p className="hot-get-count">545K+ played</p>
                  </div>
                  <div>
                    <button>Get it now</button>
                  </div>
                </div>
                <div
                  className="hot-card-bg"
                  style={{
                    backgroundImage: `url(${item.url})`,
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HotDeals;

