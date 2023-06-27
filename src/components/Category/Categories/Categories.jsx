import React from "react";
import "./Categories.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Link } from "react-router-dom";

const Categories = ({ catSlider }) => {
  return (
    <div className="categories-container2">
      <h2 className="category-heading2">
        <img src="../../src/assets/icons/Contests.svg" alt="" />
        Categories
      </h2>
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
      <div className="cat-container2">
        <Swiper
          className="mySwiper2"
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
          {catSlider.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link to={"/category-select/" + item.id}>
                  <motion.div
                    className="cat-content2"
                    transition={{
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="products2">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cat-bottom2">
                      <div className="name-rate2">
                        <h2>{item.title}</h2>
                        <h4>{item.rate}</h4>
                      </div>
                    </div>
                    <img src={item.url} alt={item.name} />
                  </motion.div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>      
    </div>
  );
};

export default Categories;
