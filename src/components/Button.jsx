import React from "react";
import { useNavigate } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Button = ({
  text,
  onClick,
  className = "",
  type = "button",
  variant = "primary", // 'primary' or 'secondary'
  link = "",
  target = "_self",
  showIcon = false, // Toggle arrow icon for secondary buttons
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (link) {
      if (link.startsWith("http")) {
        window.open(link, target);
      } else {
        navigate(link);
      }
    }
  };

  return (
    <button
      className={`btn-comp ${variant}-btn ${className}`}
      onClick={handleClick}
      type={type}
    >
      {text}
      {showIcon && variant === "secondary" && <HiMiniArrowLongRight />}
    </button>
  );
};

export default Button;
