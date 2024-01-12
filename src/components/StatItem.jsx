import React from "react";
import Wrapper from "../assets/wrappers/StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

const StatItem = ({ title, count, color, icon, bcg }) => {
  let newIcon;
  if (icon === "FaSuitcaseRolling") {
    newIcon = <FaSuitcaseRolling />;
  } else if (icon === "FaCalendarCheck") {
    newIcon = <FaCalendarCheck />;
  } else {
    newIcon = <FaBug />;
  }

  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{newIcon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatItem;
