import React from 'react'
import CategoryView from '../../components/CategorySelect/CategoryView/CategoryView';
import catSlide from "../../pages/CategoryPage/catSlideData";
import './CategorySelectPage.css';

const CategorySelectPage = () => {
  return (
    <div className='categoryselectpage'>
      <CategoryView catSlider={catSlide} />
    </div>
  );
}

export default CategorySelectPage