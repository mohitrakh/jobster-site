import React from "react";
import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import links from "../utils/links";
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        let newIcon;
        switch (icon) {
          case "IoBarChartSharp":
            newIcon = <IoBarChartSharp />;
            break;
          case "MdQueryStats":
            newIcon = <MdQueryStats />;
            break;
          case "FaWpforms":
            newIcon = <FaWpforms />;
            break;
          case "ImProfile":
            newIcon = <ImProfile />;
            break;
          default:
            break;
        }

        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            <span className="icon">{newIcon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
