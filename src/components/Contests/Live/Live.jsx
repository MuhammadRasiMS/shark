import React from "react";
import "./Live.css";
import { Link } from "react-router-dom";

const Live = ({ cardsData }) => {
  const imageUrls = [
    "../../src/assets/card/card1.svg",
    "../../src/assets/card/card2.svg",
  ];

  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };

  return (
    <>
      <div className="live-head">
        <img src="../../src/assets/icons/Contests.svg" alt="" />
        <h2 className="heading">Live Contests !</h2>
      </div>
      <div id="parentScrollDiv" className="contests-datas">
        {cardsData.map((item) => {
          const imageUrl = getRandomImageUrl();
          return (
            <div className="cards" key={item.id}>
              <div className="play-free">
                <button>Free to Play</button>
              </div>
              <div className="products-container">
                <img src={item.image} alt="product" />
              </div>
              <h1 className="product-title">{item.title}</h1>
              <p className="product-description">{item.description}</p>
              <div className="card-bottom-get">
                <div>
                  <p className="get-count">545K+ played</p>
                </div>
                <Link to={'/product/' + item.id}>
                  <div>
                    <button>Get it now</button>
                  </div>
                </Link>
              </div>
              <div
                className="card-bg"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Live;
