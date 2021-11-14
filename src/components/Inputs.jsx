import React, { useState } from "react";
import "../styles/components/Inputs.scss";
import selectbox from "../assets/inputsIcons/selectbox.png";
import info from "../assets/inputsIcons/info.png";

const Inputs = ({ data }) => {
  console.log("render");

  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(false);
  console.log(focus);
  console.log(filled);
  console.log(error);

  const handleOnChange = (event) => {
    event.preventDefault();
    let innerText = event.target.value;

    innerText ? setFilled(true) : setFilled(false);

    if (innerText.length > 11) {
      setError(true);
      setFilled(false);
    } else {
      setError(false);
    }
  };

  const handleOnFocus = (props) => {
    console.log("handleOnFocus");
    setFocus(props);
  };

  const handleOnBlur = (props) => {
    console.log("handleOnBlur");
    setFocus(props);
  };

  return (
    <div className="container">
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: `${item.label ? "flex" : "block"}`,
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          {item.label && (
            <div className="label">
              <span>{item.label[0]} </span>
              <span>{item.label[1]}</span>
            </div>
          )}
          <div
            className={`input-container
          input-container-${item.size}
          input-container-${focus ? "focus" : null}
          input-container-${error ? "error" : null}
          input-container-${filled ? "filled" : null}`}
          >
            {item.leftIcon ? (
              <img
                src={!error ? item.leftIcon : item.leftDanger}
                alt={"leftIcon"}
                className={"leftIcon"}
              />
            ) : (
              item.tr && (
                <div className="dropdown">
                  <div
                    style={{
                      backgroundImage: `url(${item.tr})`,
                      heigth: "100%",
                    }}
                  >
                    isa
                  </div>
                  <div>isa</div>
                  <div style={{ color: "#9b9b9b" }}>+90</div>
                  <div className="dropdown-content">isa</div>
                </div>
              )
            )}
            <input
              onChange={(event) => handleOnChange(event)}
              onBlur={() => handleOnBlur(false)}
              onFocus={() => handleOnFocus(true)}
              disabled={false}
              className={`input
            input-${item.size}
            input-${error ? "error" : null}
            input-${filled ? "filled" : null}`}
              placeholder={item.placeholder}
            />
            {filled && focus ? (
              <img
                className="clearIcon"
                src={item.cleartext}
                alt={"clear-icon"}
                onClick={() => console.log("clicked")}
              />
            ) : (
              error && (
                <img
                  className="errorIcon"
                  src={item.error}
                  alt={"error-icon"}
                />
              )
            )}
          </div>
          {item.label && (
            <div
              className={`label-bottom
              label-bottom-${error ? "error" : null}
            label-bottom-${
              item.bottomRightLabel && item.bottomLeftLabel
                ? "double"
                : item.bottomLeftLabel
                ? "left"
                : "right"
            }
    }`}
            >
              {item.bottomLeftLabel && (
                <span>
                  <span>{item.bottomLeftLabel} </span>
                  <img className="info" src={info} alt={info} />
                </span>
              )}
              <span>{item.bottomRightLabel}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Inputs;
