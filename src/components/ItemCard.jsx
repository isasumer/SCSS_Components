import React, { useState } from "react";
import Buttons from "../components/Buttons";
import "../styles/components/ItemCard.scss";

const ItemCard = ({ item }) => {
  const [focus, setFocus] = useState(true);

  const handleOnFocus = (props) => {
    setFocus(props);
  };

  const handleOnBlur = (props) => {
    setFocus(props);
  };
  console.log(item);
  return (
    <div
      className="item-wrapper"
      onBlur={() => handleOnBlur(true)}
      onFocus={() => handleOnFocus(true)}
    >
      <div className="item-img">
        <img src={item.thumbnail} alt={item.title} />
      </div>
      {focus ? (
        <div
          className="item-top"
          // onBlur={() => handleOnBlur(false)}
          // onFocus={() => handleOnFocus(true)}
        >
          {" "}
          <div className="title">{item.title}</div>
          <div className="item-developer">
            <span>{item.developer}</span>-<span>{item.genre}</span>
          </div>
          <div className="item-release-date">{item.release_date}</div>
          <div className="item-description">{item.short_description}</div>
        </div>
      ) : (
        <div className="item-button">
          <Buttons
            onClick={() => window.open(item.game_url)}
            innerText={"View Game"}
            color={"primary"}
            size={"default"}
            disabled={false} ///cursor not allowed
          />
        </div>
      )}
    </div>
  );
};

export default ItemCard;
