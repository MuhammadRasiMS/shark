import React, { useState } from "react";
import "./Sidebar.css";
import Item from "./Item";
import { motion } from "framer-motion";
import Vector from "../../assets/icons/Vector.svg";
import About from "../../assets/icons/About.svg";
import Contests from "../../assets/icons/Contests.svg";
import Orders from "../../assets/icons/Orders.svg";
import Favourites from "../../assets/icons/Favourites.svg";
import Payments from "../../assets/icons/Payments.svg";
import Winners from "../../assets/icons/Winners.svg";
import Settings from "../../assets/icons/Settings.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

 const sideContainerVariants = {
   true: {
     transition: {
       type: "spring",
       stiffness: 100,
       damping: 20,
     },
   },
   false: {
     transition: {
       delay: 0.6,
       type: "spring",
       stiffness: 100,
       damping: 20,
     },
   },
 };

const sidebarVariants = {
  true: {
    width: "15rem",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  false: {
    width: "5rem",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "1rem",
      width: "3rem",
    },
  };

  const logoVariants = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      data-open={open}
      variants={sideContainerVariants}
      initial={`${open}`}
      animate={`${open}`}
      className="sidebar-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={`${open}`}
        animate={`${open}`}
        variants={sidebarVariants}
        className="sidebar"
      >
        <div className="main">
          <Link to="/" className="link-unstyled">
            <motion.div
              className="logo"
              initial={`${open}`}
              animate={`${open}`}
              variants={logoVariants}
            >
              <img src="../../src/assets/images/logo1.svg" alt="logo" />
              <h4>SharkBuz</h4>
            </motion.div>
          </Link>
        </div>
        <div className="groups">
          <div className="group">
            <Link to="/" className="link-unstyled" >
              <Item icon={Vector} name="Home" />
            </Link>
            <Item icon={About} name="About" />
            <Item icon={Contests} name="Contests" />
            <Item icon={Orders} name="Orders" />
            <Item icon={Favourites} name="Favourites" />
            <Item icon={Payments} name="Payments" />
            <Link to="/winners" className="link-unstyled">
              <Item icon={Winners} name="Winners" />
            </Link>
            <div className="settings">
              <Item icon={Settings} name="Settings" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
