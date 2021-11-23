import React from "react";
import Buttons from "../components/Buttons";
import AddCircle from "../assets/ButtonIcons/add-circle@2x.png";
import selectBox from "../assets/ButtonIcons/selectbox@2x.png";

const ButtonPage = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Buttons
        innerText={"button"}
        color={"primary"}
        size={"large"}
        disabled={false} ///cursor not allowed
      />
      <Buttons
        innerText={"button"}
        color={"success"}
        size={"default"}
        disabled={false} ///cursor not allowed
      />
      <Buttons
        innerText={"button"}
        color={"tertiary"}
        size={"small"}
        disabled={false} ///cursor not allowed
      />
      <Buttons
        innerText={"button"}
        color={"primary"}
        size={"large"}
        disabled={false} ///cursor not allowed
        leftIcon={AddCircle}
      />
      <Buttons
        innerText={"button"}
        color={"success"}
        size={"default"}
        disabled={false} ///cursor not allowed
        rightIcon={selectBox}
      />
      <Buttons
        innerText={"button"}
        color={"danger"}
        size={"small"}
        disabled={false} ///cursor not allowed
      />
    </div>
  );
};

export default ButtonPage;
