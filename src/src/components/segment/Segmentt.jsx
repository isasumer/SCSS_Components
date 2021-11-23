import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/components/Segment_styles.scss";

const Segment = (props) => {
  const { type, size, buttonNames } = props;

  const [toggle, setToggle] = useState(0);

  const handleClick = (id) => {
    setToggle(id);
  };

  return (
    <div className={`${type}`}>
      {buttonNames.map((item, id) => (
        <button
          onClick={() => handleClick(id)}
          key={id}
          className={`${type}-button${"-" + size}`}
        >
          <span className="segment-button-text" ref={(e) => console.log(e)}>
            {item.buttonname}
          </span>
        </button>
      ))}
      <div
        className="segment-active"
        style={{
          width: `calc(100% / ${buttonNames.length} - 4px) `,
          left: `${(100 / buttonNames.length) * toggle}%`,
        }}
      ></div>
    </div>
  );
};

Segment.propTypes = {
  id: PropTypes.number,
  size: PropTypes.oneOf(["default", "small", "tiny"]),
  type: PropTypes.oneOf(["segment", "segment-fluid"]),
  buttonNames: PropTypes.array,
};

export default Segment;
