import React from "react";
import Categories from "../../components/Category/Categories/Categories";
import HotDeals from "../../components/Category/HotDeals/HotDeals";
import catSlide from "./catSlideData";
import HotData from "./hotData";
import "./CategoryPage.css";

const CategoryPage = () => {
  return (
    <div className="cat-page-container">
      <Categories catSlider={catSlide} /> {/* Corrected prop name */}
      <HotDeals hotData={HotData} />
    </div>
  );
};

export default CategoryPage;
