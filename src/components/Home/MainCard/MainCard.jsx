import "./MainCard.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const MainCard = ({ slides }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 3500);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 3500);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, goToNext]);

  return (
    <Link to={"/contests"}>
      <motion.div
        className="slider"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          stiffness: 400,
          damping: 17,
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: .9 }}
        key={slides[currentIndex].url}
      >
        <div className="free-to-play">
          <button>Free to Play</button>
        </div>
        <div className="left-arrow" onClick={goToPrevious}></div>
        <div className="right-arrow" onClick={goToNext}></div>

        <motion.div
          className="image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          key={slides[currentIndex].image}
        >
          <img src={slides[currentIndex].image} alt="products" />
        </motion.div>

        <motion.div
          className="title"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          key={slides[currentIndex].title}
        >
          {slides[currentIndex].title}
        </motion.div>

        <motion.div
          className="description"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          key={slides[currentIndex].description}
        >
          {slides[currentIndex].description}
        </motion.div>

        <motion.div
          className="card-bottom"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          // key={slides[currentIndex].description}
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
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
      </motion.div>
    </Link>
  );
};

export default MainCard;