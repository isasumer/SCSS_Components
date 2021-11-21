import { useState, useRef } from "react";
import classNames from "classnames";
import clearTextIcon from "../assets/inputsIcons/clear-text@3x.png";
import searchIcon from "../assets/inputsIcons/search.png";
import checkForm from "../assets/inputsIcons/check-form@3x.png";
import "./../styles/components/SelectBox.scss";
import selectbox from "../assets/inputsIcons/selectbox16px.png";

const SelectBox = ({ data, label, placeholder }) => {
  const inputRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  let [isAllChecked, setIsAllChecked] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState();
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
  );

  const handleOnFilter = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  const searchedData = data.filter((item) =>
    item.text.toLowerCase().includes(searchTerm)
  );

  const handleOnChange = (selected) => {
    const UpdatedCheckedState = checkedState.map(
      (item, index) => (index === selected ? !item : item) //turns false to true in checkedState array
    );
    setCheckedState(UpdatedCheckedState);
    const filteredList = UpdatedCheckedState.reduce(
      (prev, currentState, index) => {
        if (currentState === true) {
          return prev + " " + data[index].value + ",";
        }

        return prev;
      },
      ""
    );
    setFiltered(filteredList);
  };

  const handleClearFilter = (item) => {
    setSearchTerm(item);
  };
  const handleAllFilter = (item) => {
    setIsAllChecked(item);
    setCheckedState(new Array(data.length).fill(item));
  };

  return (
    <div className="select-box-container">
      <div className="select-box-label">
        <div htmlFor={label} className="label">
          {label}
        </div>
      </div>
      <div
        className={classNames("select-box-placeholder", {
          "select-box-placeholder-active": isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="placeholder">
          {filtered ? filtered.split("").slice(0, -1).join("") : placeholder}
        </div>
        <div className="icon">
          {filtered ? (
            <span className="bubble">
              {filtered.split("").filter((c) => c === ",").length}
            </span>
          ) : null}
          <img src={selectbox} alt={selectbox} />
        </div>
      </div>
      <div
        className={classNames("select-box-wrapper", {
          "select-box-wrapper-active": isOpen,
        })}
      >
        <div className="select-box-filter">
          <img
            src={searchIcon}
            alt="search-Icon"
            onClick={() => handleAllFilter(!isAllChecked)}
          />
          <input
            placeholder="Filtrele"
            type="text"
            value={searchTerm}
            ref={inputRef}
            onChange={(e) => handleOnFilter(e)}
          />
          {searchTerm && (
            <img
              src={clearTextIcon}
              alt="clearText"
              onClick={() => handleClearFilter("")}
            />
          )}
        </div>
        <div className="select-box-checkbox-container">
          <ul>
            {searchedData.map((item, index) => {
              return (
                <li key={index} className="select-box-checkbox-item">
                  <input
                    style={{ backgroundImage: `url(${checkForm})` }}
                    type="checkbox"
                    id="check"
                    className="select-box-checkbox"
                    text={item.text}
                    value={item.value}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>
                    {item.text}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
