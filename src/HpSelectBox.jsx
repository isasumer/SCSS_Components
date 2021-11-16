import React, { useEffect, useRef, useState } from "react";
import "./HpSelectBox.scss";
import SearchIcon from "./SearchIcon";
import ClearIcon from "./ClearIcon";

function HpSelectBox({
  label,
  data,
  placeholder,
  setSelectedValues,
  filterOpened = false,
  multipleSelect = false,
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(filterOpened);
  const [select, setSelect] = useState([]);
  const [isAllChecked, setisAllChecked] = useState(false);
  const searchContainerRef = useRef(null);
  const [onHover, setOnHover] = useState(false);
  let timeOutId;
  useEffect(() => {
    setSelectedValues(select);
    setisAllChecked(data.length === select.length);
    return () => {
      clearTimeout(timeOutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select, setSelectedValues, timeOutId]);

  const handleSelection = (value) => {
    setSelect((prevState) =>
      prevState.indexOf(value) > -1
        ? [...prevState.filter((state) => state !== value)]
        : [...prevState, value]
    );
  };
  const handleOpen = () => {
    /*For animation*/
    if (open) {
      searchContainerRef.current.classList.add("close");
      timeOutId = setTimeout(() => {
        setOpen(false);
      }, 300);
    } else {
      setOpen(true);
    }
  };
  const handleClearSearch = () => {
    setSearch("");
  };
  const handleSelectAll = (e) => {
    if (isAllChecked) {
      setSelect([]);
    }
    if (!isAllChecked) {
      data
        .filter((item) => item.text.includes(search))
        .map((item) =>
          setSelect((prevState) =>
            select.indexOf(item.value) > -1
              ? [...prevState]
              : [...prevState, item.value]
          )
        );
    }
  };
  return (
    <div className="hp-selectbox-container">
      <label className="hp-selectbox-label"> {label} </label>
      <div onClick={handleOpen} className="hp-selectbox-input-wrapper">
        <input
          disabled
          type="text"
          className={`hp-selectbox-input ${open ? "opened" : ""}`}
          placeholder={placeholder}
          value={select.join(", ")}
        />
        {select.length > 0 && (
          <span className="hp-selectbox-bubble">{select.length}</span>
        )}
        <span className="hp-selectbox-arrow-icon"></span>
      </div>
      {data && open && (
        <div ref={searchContainerRef} className="hp-selectbox-search-container">
          <div className="hp-selectbox-search-input-wrapper">
            <span
              className={`hp-selectbox-search-icon ${
                multipleSelect ? "select-all" : ""
              }`}
              onMouseEnter={() => setOnHover(multipleSelect ? true : false)}
              onMouseLeave={() => setOnHover(false)}
            >
              {onHover ? (
                <label className="select-all-wrapper">
                  <input
                    type="checkbox"
                    checked={isAllChecked}
                    onChange={(e) => handleSelectAll(e)}
                  />
                  <span className="checkmark"></span>
                </label>
              ) : (
                <SearchIcon />
              )}
            </span>
            {search.length > 0 && (
              <span
                onClick={handleClearSearch}
                className="hp-selectbox-clear-icon"
              >
                <ClearIcon />
              </span>
            )}
            <input
              type="text"
              placeholder="Filtrele"
              className="hp-selectbox-search-input"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          {data
            .filter((item) => item.text.includes(search))
            .map((item) => (
              <label className="hp-selectbox-checkbox-wrapper" key={item.id}>
                {item.text}
                <input
                  checked={select.indexOf(item.value) > -1}
                  className="hp-selectbox-checkbox"
                  type="checkbox"
                  value={item.value}
                  onChange={(e) => handleSelection(e.target.value)}
                />
                <span className="hp-selectbox-checkmark"></span>
              </label>
            ))}
        </div>
      )}
    </div>
  );
}

export default HpSelectBox;
