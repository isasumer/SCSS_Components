import React from "react";
import Buttons from "../components/Buttons";

const ButtonPage = () => {
  return (
    <div>
      <Buttons
        innerText={"button"}
        color={"success"}
        size={"large"}
        disabled={false} ///cursor not allowed
      />
    </div>
  );
};

export default ButtonPage;
