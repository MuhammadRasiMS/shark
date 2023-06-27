import "./TopDeals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import usersOnline from "./usersOnline";

const TopDeals = ({ topdealSlide, cardSlide }) => {
  return (
    <div className="topdeals">
      <div className="topdeals-datas">
        <p>Top Deals</p>
        <style>
          {`
            .swiper-pagination-bullet {
              width: 4px;
              height: 15px;
              background-color: #ccc;
              opacity: 0.8;
              transition: all 1s ease;
              border-radius: 0px;
              margin: 0 !important;
            } 
              .swiper-pagination-bullet:first-child {
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        }

        .swiper-pagination-bullet:last-child {
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;
        }
            .swiper-pagination-bullet-active {
              width: 4px;
              height: 35px;
              background-color: rgb(81, 81, 81);
              border-radius: 0px;
            }
          `}
        </style>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          direction="vertical"
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={2000}
          modules={[Pagination, Autoplay]}
          className="topdeals-swiper"
          style={{
            display: "flex",
            transform: "rotate(90deg) translateY(-60px) !important",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {topdealSlide.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="deal-item">
                  <div className="deal-image">
                    <img src={item.url} alt="deal-image" />
                  </div>
                  <div className="win">
                    <span>Win&nbsp;</span>
                    <h4>{item.title}</h4>
                    <p>Play & win</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="topdeals-card">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
          className="td-card-swiper"
        >
          {cardSlide.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="card-slider">
                  <div className="card-header">
                    <h2>Top deals!</h2>
                    <button>Free to Play</button>
                  </div>
                  <div className="td-card-image">
                    <img src={item.image} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                  <button className="td-get-it-now">Get it now</button>
                  <img src={item.url} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="online-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          direction="vertical"
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="online-slider"
        >
          {usersOnline.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="online-datas">
                  <div className="user-image">
                    <img src={item.image} alt="user" />
                  </div>
                  <div className="namendgame">
                    <h3>{item.name}</h3>
                    <p>Playing {item.game}</p>
                  </div>
                  <div className="online-dot"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopDeals;
