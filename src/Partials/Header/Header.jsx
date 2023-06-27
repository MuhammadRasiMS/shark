import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationIcon from "../../assets/icons/bell.svg";
import Plane from "../../assets/icons/plane.svg";
import { Link } from "react-router-dom";
import { notificationsData } from "./Notifications";
import { motion } from "framer-motion";


const NavBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleNotificationClose = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const notificationCount = notifications.length;
const reversedNotifications = [...notifications].reverse();
  return (
    <div>
      <div className="navbar">
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search anything..." />
        </div>
        <div className="navbar-right">
          <div
            className="icon"
            onMouseEnter={handlePopupOpen}
            onMouseLeave={handlePopupClose}
          >
            <img src={NotificationIcon} alt="notification" className="symbol" />
            {notificationCount > 0 && (
              <div className="notification-badge">{notificationCount}</div>
            )}
            {isPopupOpen && (
              <div className="popup">
                <ul>
                  {reversedNotifications.map((notification) => (
                    <motion.li
                      key={notification.id}
                      whileHover={{
                        backgroundColor: "rgba(33, 33, 33,0.6)",
                        boxShadow: "0 8px 18px 0 #3b3b3b",
                        backdropFilter: "blur(5.5px)",
                        WebkitBackdropFilter: "blur(5.5px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        cursor: "pointer",
                      }}
                    >
                      <div className="notification-header">
                        {notification.heading}
                        <button
                          className="close-button"
                          onClick={() =>
                            handleNotificationClose(notification.id)
                          }
                        >
                          X
                        </button>
                      </div>
                      <div className="notification-description">
                        {notification.description}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="icon">
            <img src={Plane} alt="messages" className="symbol" />
          </div>
          <Link
            to={"/login"}
            style={{
              textDecoration: "none",
              outline: "none",
              color: "inherit",
            }}
          >
            <div className="icon">
              <PersonIcon className="symbol" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

