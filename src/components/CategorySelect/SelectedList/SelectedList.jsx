import React from "react";
import "./SelectedList.css";

const SelectedList = ({ items }) => {
  const imageUrls = [
    "../../src/assets/card/card1.svg",
    "../../src/assets/card/card2.svg",
  ];

  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(
      Math.floor(Math.random() * imageUrls.length)
    );
    return imageUrls[randomIndex];
  };

  return (
    <div className="selected-list-container">
      <h2 className="category-heading2 s-l-heading">
        <img src="../../src/assets/icons/Contests.svg" alt="" />
        {items.category}
      </h2>
      <div id="parentScrollDiv" className="selected-datas">
        {items.items.map((item) => {
          const imageUrl = getRandomImageUrl();
          return (
            <div className="selected-cards" key={item.id}>
              <div className="selected-play-free">
                <button>Free to Play</button>
              </div>
              <div className="selected-products-container">
                <img src={item.image} alt="product" />
              </div>
              <h2 className="selected-product-title">{item.name}</h2>
              <p className="selected-product-description">{item.description}</p>
              <div className="selected-card-bottom-get">
                <div>
                  <p className="selected-get-count">545K+ played</p>
                </div>
                <div>
                  <button>Get it now</button>
                </div>
              </div>
              <div
                className="selected-card-bg"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedList;
