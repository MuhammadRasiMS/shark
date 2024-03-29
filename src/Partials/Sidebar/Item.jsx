import React from "react";
import "./Item.css";
import { motion } from "framer-motion";

function Item({ icon, name }) {
  const subheading = {
    true: {
      opacity: 1,
      display: "block",
    },
    false: {
      opacity: 0,
      display: "none",
    },
  };
  return (
    <motion.div
      className="item"
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.3)",
        boxShadow: "0 8px 32px 0 #3b3b3b",
        backdropFilter: "blur(5.5px)",
        WebkitBackdropFilter: "blur(5.5px)",
        border: "1px solid rgba(255,255,255,0.18)",
        cursor: "pointer",
      }}
      transition={{
        type: "none",
        duration: 0.2,
      }}
    >
      <div className="icons">
        <img src={icon} alt="" />
      </div>
      <motion.span variants={subheading}>{name}</motion.span>
    </motion.div>
  );
}

export default Item;
