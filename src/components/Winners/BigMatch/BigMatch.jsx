import React from 'react';
import './BigMatch.css';
import Winners from "../../../assets/icons/winners.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const BigMatch = ({ BigMatchDatas }) => {
  return (
    <div className="bigmatch-container">
      <div className="bigmatch-header">
        <img src={Winners} alt="trophy" className="trophy" />
        <h1>Big Match Winners</h1>
      </div>
      <div className="bigmatch-container2"></div>
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
        className="bigmatch-swiper"
        speed={2000}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
      >
        {BigMatchDatas.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="winner-profile">
                <div className="profile-picture">
                  <img
                    src="../../../src/assets/vector/winnerround.svg"
                    alt=""
                  />
                  <div className="profile-image">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="nameandndprize">
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

export default BigMatch;