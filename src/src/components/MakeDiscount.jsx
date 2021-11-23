import React from "react";
import clearlarge from "../assets/inputsIcons/clear-text_2.png";
import error from "../assets/inputsIcons/error.png";
import searchIcon from "../assets/inputsIcons/search.png";
import SelectBoxPage from "../pages/selectBox/SelectBoxPage";
import Inputs from "../components/Inputs";
import RadioButton from "../components/RadioButton";
import "../styles/components/MakeDiscount.scss";

const MakeDiscount = () => {
  return (
    <div className="discount-container">
      <div className="discount-subtitles">
        <p>01 İndirim Bilgileri</p>
        <div className="discount-subtitles-bounds"></div>
      </div>
      <div className="discount-discountName">
        <Inputs
          // setSearchData={setSearchData}
          data={[
            {
              id: 1,
              disabled: false,
              type: "default-input",
              cleartext: clearlarge,
              error: error,
              leftIcon: null,
              leftDanger: null,
              tr: null,
              placeholder: "Örnek: Eker bahar keyfi",
              size: "x-large",
              label: ["İndirim adı", null],
              bottomRightLabel: null,
              bottomLeftLabel: null,
            },
          ]}
        />
      </div>
      <div className="discount-includedSkus">
        <RadioButton />
      </div>
      <div className="discount-category" style={{zIndex:10}}>
       <SelectBoxPage />
      </div>
      <div className="discount-excluded-category" style={{zIndex:3}}>
       <SelectBoxPage />
      </div>
      <div className="discount-excluded-label" style={{zIndex:2}}>
       <SelectBoxPage />
      </div>
      {/* <div className="discount-includedSkus">
        <RadioButton />
      </div> */}
    </div>
  );
};

export default MakeDiscount;
