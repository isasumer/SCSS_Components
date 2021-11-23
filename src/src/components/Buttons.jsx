import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Buttons.scss";

const Buttons = ({
  size,
  type,
  color,
  disabled,
  innerText,
  leftIcon,
  rightIcon,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      className={`btn btn-${size} btn-${color}`}
      type={type}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && <img src={leftIcon} alt="leftIcon" />}
      <span>{innerText}</span>
      {rightIcon && <img src={rightIcon} alt="rightIcon" />}
    </button>
  );
};

Buttons.defaultProps = {
  color: "primary",
  size: "large",
  innerText: "Sepete Ekle",
  type: "button",
};

Buttons.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  innerText: PropTypes.string,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.symbol,
  rightIcon: PropTypes.symbol,
};

export default Buttons;
