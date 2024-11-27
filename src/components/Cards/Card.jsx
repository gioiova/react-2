import React from "react";
import TextCard from "./TextCard";
import Chart from "./Chart";
import AvatarCard from "./AvatarCard.jsx";

const Card = ({
  title,
  value,
  description,
  navLink,
  className,
  theme,
  increase,
  svvg,
  showNavLink,
  titleColor,
  valueColor,
  subText,
  subTextColor,
}) => {
  const renderCard = () => {
    switch (theme) {
      case "text":
        return (
          <TextCard
            title={title}
            value={value}
            description={description}
            navLink={navLink}
            className={className}
            increase={increase}
            titleColor={titleColor}
            valueColor = {valueColor}
            subText={subText}
            subTextColor={subTextColor}
          />
        );
      case "chart":
        return (
          <Chart
            className={className}
            title={title}
            value={value}
            description={description}
            navLink={navLink}
            svvg = {svvg}
          />
        );
      case "avatar":
        return (
          <AvatarCard
            title={title}
            value={value}
            description={description}
            navLink={navLink}
            className={className}
            titleColor={titleColor}
            valueColor = {valueColor}
          />
        );
     
      default:
        return null;
    }
  };
  return <>{renderCard()}</>;
};

export default Card;
