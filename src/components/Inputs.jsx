import React, { useEffect, useState } from "react";
import "../styles/components/Inputs.scss";
import selectbox from "../assets/inputsIcons/selectbox.png";
import info from "../assets/inputsIcons/info.png";

const Inputs = ({ data, setFilterData }) => {
  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(false);
  const [innerText, setInnerText] = useState("");
  const [code, setCode] = useState();
  const [dialCode, setDialCode] = useState("");
  useEffect(() => {
    async function getCountryCodes() {
      let url = "https://countriesnow.space/api/v0.1/countries/codes";
      try {
        let res = await fetch(url);
        const response = await res.json();
        setCode(response.data);
      } catch (error) {
        console.log("Couldn't get codes:", error);
      }
    }
    getCountryCodes();
  }, []);
  const handleOnChange = (event) => {
    event.preventDefault();
    // if (data[7].type === "tr-input" && innerText.length === 2) {
    //   console.log(event.target.value.length);
    //   let manipulatedData = event.target.value;
    //   setInnerText("(" + manipulatedData + ")");
    // } else {
    setInnerText(event.target.value);
    setFilterData(event.target.value);

    innerText ? setFilled(true) : setFilled(false);

    if (event.target.value.length > 15) {
      setError(true);
      setFilled(false);
    } else {
      setError(false);
    }
  };

  const handleOnFocus = (props) => {
    setFocus(props);
  };

  const handleOnBlur = (props) => {
    setFocus(props);
  };
  const handleClearInnerText = (item) => {
    setInnerText(item);
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
                  {dialCode ? (
                    <div style={{ color: "#9b9b9b", width: "80px" }}>
                      {dialCode}
                    </div>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <img src={item.tr} alt={"tr"} />
                      <img src={selectbox} alt="select" />
                      <div style={{ color: "#9b9b9b" }}>+90</div>
                    </div>
                  )}
                  <div className="dropdown-content">
                    <select
                      name="dial-code"
                      onChange={(e) => setDialCode(e.target.value)}
                    >
                      {code?.map((item) => (
                        <option value={item.dialCode} key={item.code}>
                          {item.code + " " + item.dial_code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )
            )}
            <input
              required={item.type === "tr-input" ? true : false}
              onChange={(event) => handleOnChange(event)}
              onBlur={() => handleOnBlur(false)}
              onFocus={() => handleOnFocus(true)}
              disabled={item.disabled}
              className={`input
            input-${item.size}
            input-${error ? "error" : null}
            input-${filled ? "filled" : null}`}
              placeholder={item.placeholder}
              value={innerText}
            />
            {filled && focus ? (
              <img
                className="clearIcon"
                src={item.cleartext}
                alt={"clear-icon"}
                onMouseDown={() => handleClearInnerText("")}
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
