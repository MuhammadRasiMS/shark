import SideBar from "../../Partials/Sidebar/SideBar";
import CardRight from "../../components/Home/CardRight/CardRight";
import CategoriesMain from "../../components/Home/CategoriesMain/CategoriesMain";
import MainCard from "../../components/Home/MainCard/MainCard";
import MainRight from "../../components/Home/MainRight/MainRight";
import TopDeals from "../../components/Home/TopDeals/TopDeals";
import "./HomePage.css";
import slides from "./slidesData";
import slides2 from "./slidesData2";
import catSlide from "./catSlideData";
import slides3 from "./topDealsData";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      {/* <div className="sidebar-container">
        <SideBar />
      </div> */}
      <div className="containers">
        <div className="main-container">
          <motion.div
            className="container-styles"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MainCard slides={slides} parentWidth={500} />
          </motion.div>
          <div className="container-styles1">
            <CardRight slides2={slides2} parentWidth={500} />
          </div>
        </div>
        <div className="bottom-containers">
          <div className="category-container">
            <CategoriesMain catSlider={catSlide} />
          </div>
          <div className="draw_game-container">
            <MainRight />
          </div>
        </div>
      </div>
      <div className="topdeals-container">
        <TopDeals topdealSlide={slides3} cardSlide={slides} />
      </div>
    </div>
  );
}
