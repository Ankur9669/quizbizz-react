import React from "react";
import "./sidebar.css";
import { FaCube, FaHeadphones } from "../../assets/icons/icons";

const Sidebar = () => {
  return (
    <aside className="sidebar col-1">
      <div className="sidebar-items-container-mobile">
        <div className="nav-item-mobile weight-semi-bold active">
          <FaCube className="font-large nav-item-icon" />
          <span className="nav-item-text font-medium-large">Dashboard</span>
        </div>
        <div className="nav-item-mobile weight-semi-bold">
          <FaHeadphones className="font-large nav-item-icon" />
          <span className="nav-item-text font-medium-large">Support</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
