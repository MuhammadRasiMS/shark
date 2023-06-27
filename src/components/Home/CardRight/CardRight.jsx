import "./CardRight.css";
import { useEffect, useState, useRef, useCallback } from "react";
import React from "react";
import {motion} from 'framer-motion';

const CardRight = ({ slides2 }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides2.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides2]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

    useEffect(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        goToNext();
      }, 4000);

      return () => clearTimeout(timerRef.current);
    }, [currentIndex, goToNext]);

  return (
    <motion.div
      className="slider"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      key={slides2[currentIndex].title}
    >
      <div className="left-arrow" onClick={goToPrevious}></div>
      <div className="right-arrow" onClick={goToNext}></div>
      <div className="image1">
        <img src={slides2[currentIndex].image} alt="products" />
      </div>
      <motion.div
        className="title"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        key={slides2[currentIndex].title}
      >
        {slides2[currentIndex].title}
      </motion.div>
      <motion.div
        className="description1"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        key={slides2[currentIndex].description}
      >
        {slides2[currentIndex].description}
      </motion.div>
      <motion.div
        className="card-bottom"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        // key={slides2[currentIndex].description}
      >
        <div>
          <p className="count">545K+ played</p>
        </div>
        <div>
          <button>Get it now</button>
        </div>
      </motion.div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides2[currentIndex].url})` }}
      ></div>
      {/* <div className="dots-container">
        {slides2.map((slide, slideIndex) => (
          <div
            className="dots"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            —
          </div>
        ))}
      </div> */}
    </motion.div>
  );
};

export default CardRight;
