import React from "react";
import "./Weekly.css";
import Winners from "../../../assets/icons/winners.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Weekly = ({ WeeklyDatas }) => {
  return (
    <div className="weekly-container">
      <div className="weekly-header">
        <img src={Winners} alt="trophy" className="trophy" />
        <h1>Weekly Winners</h1>
      </div>
      <div className="weekly-container2"></div>
      <style>
        {`
            .swiper-pagination {
              transform: translateY(13px) !important;
              border-radius: 2px;
            }
            .swiper-pagination-bullet {
              width: 15px;
              height: 7px;
              background-color: #ccc;
              opacity: 0.8;
              transition: all 1s ease;
              border-radius: 0px;
              margin: 0 !important;
            }

             .swiper-pagination-bullet:first-child {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }

        .swiper-pagination-bullet:last-child {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
            
            .swiper-pagination-bullet-active {
              width: 50px;
              height: 7px;
              background-color: rgb(81, 81, 81);
              border-radius: 0px;
            }
        `}
      </style>
      <Swiper
        className="weekly-swiper"
        speed={2000}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
      >
        {WeeklyDatas.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="weekly-winner-profile">
                <div className="weekly-profile-picture">
                  <img
                    src="../../../src/assets/vector/winnerround.svg"
                    alt=""
                  />
                  <div className="weekly-profile-image">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="weekly-nameandndprize">
                  <h2>{item.name}</h2>
                  <h4>Won {item.prize}</h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Weekly;
