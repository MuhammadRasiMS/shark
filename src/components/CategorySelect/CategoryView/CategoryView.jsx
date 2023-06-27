import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryView.css";
import itemsForCategory from "./items";
import SelectedList from "../SelectedList/SelectedList";

const CategoryView = ({ catSlider }) => {
  const { id } = useParams();
  const selectedCategory = catSlider.find((item) => item.id === parseInt(id));

  if (!selectedCategory) {
    return <div>Invalid category ID</div>;
  }

  const items = itemsForCategory.find(
    (category) => category.category === selectedCategory.title
  );

  return (
    <div className="selected-page-container">
      <div className="selected-container">
        <h2 className="category-heading2 s-heading">
          <img src="../../src/assets/icons/Contests.svg" alt="" />
          Categories
        </h2>
        <div className="selected-category-item">
          <div className="selected-product">
            <img src={selectedCategory.image} alt="" />
          </div>
          <div className="selected-bottom">
            <div className="selected-name-rate">
              <h1>{selectedCategory.title}</h1>
              <h2>{selectedCategory.rate}</h2>
            </div>
          </div>
          <img src={selectedCategory.url} alt="bg" className="selected-bg" />
        </div>
      </div>

      <SelectedList items={items} />
    </div>
  );
};

export default CategoryView;
