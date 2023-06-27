import './MainRight.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import {  Autoplay, EffectFade } from "swiper";
const MainRight = () => {
  return (
    <div className="mainright-container">
      <Swiper
        slidesPerView={2}
        direction="vertical"
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect="fade" 
        fadeEffect={{
          crossFade: true, 
        }}
        speed={3000}
        modules={[EffectFade, Autoplay]}
        className="swiper-main"
      >
        <SwiperSlide>
          <div className="mainright mainright1">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>
                Daily <br /> Draw & Games
              </h1>
              <div className="get-container">
                <p>₹10</p>
                <div className="get-it-now">
                  <h2>+ Get it now</h2>
                </div>
              </div>
            </div>
            <div className="draw-product">
              <img src="../../src/assets/images/earpod.png" alt="" />
            </div>
          </div>
          <div className="mainright mainright2">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>
                Weekly <br /> Draw & Games
              </h1>
              <div className="get-container">
                <p>₹10</p>
                <button className="get-it-now">
                  <h2>+ Get it now</h2>
                </button>
              </div>
            </div>
            <div className="draw-product">
              <img src="../../src/assets/images/iphone2.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mainright mainright3">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>
                Monthly <br /> Draw & Games
              </h1>
              <div className="get-container">
                <p>₹10</p>
                <div className="get-it-now">
                  <h2>+ Get it now</h2>
                </div>
              </div>
            </div>
            <div className="draw-product">
              <img src="../../src/assets/images/mini.png" alt="" />
            </div>
          </div>
          <div className="mainright mainright4">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>The Big Match</h1>
              <h4
                style={{ color: "white", fontWeight: 200 }}
              >
                Lifetime settlemet: <br /> Fortune of a Lifetime
              </h4>
              <div className="get-container" >
                <p>₹10</p>
                <button className="get-it-now">
                  <h2>+ Get it now</h2>
                </button>
              </div>
            </div>
            <div className="draw-product">
              <img src="../../src/assets/images/bigprize.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainRight