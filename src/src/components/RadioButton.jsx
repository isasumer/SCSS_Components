import React, { useState } from "react";
import checkForm from "../assets/inputsIcons/check-form@3x.png";
import "../styles/components/RadioButton.scss";
const RadioButton = ({ label = "label", value = "value" }) => {
  const [includedSkus, setincludedSkus] = useState("Kategori");
  console.log(includedSkus);
  return (
    <div className="radio-btn-container">
      <div className="radio-btn-group">
        <div
          className="radio-btn"
          onClick={() => {
            setincludedSkus("Kategori");
          }}
        >
          <input
            style={{ backgroundImage: `url(${checkForm})` }}
            type="radio"
            value={includedSkus}
            name="includedSkus"
            checked={includedSkus === "Kategori"}
          />
          <label>Kategori</label>
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setincludedSkus("Marka");
          }}
        >
          <input
            style={{ backgroundImage: `url(${checkForm})` }}
            type="radio"
            value={includedSkus}
            name="includedSkus"
            checked={includedSkus === "Marka"}
          />
          <label>Marka</label>
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setincludedSkus("Mağaza");
          }}
        >
          <input
            style={{ backgroundImage: `url(${checkForm})` }}
            type="radio"
            value={includedSkus}
            name="includedSkus"
            checked={includedSkus === "Mağaza"}
          />
          <label>Mağaza</label>
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setincludedSkus("SKU");
          }}
        >
          <input
            style={{ backgroundImage: `url(${checkForm})` }}
            type="radio"
            value={includedSkus}
            name="includedSkus"
            checked={includedSkus === "SKU"}
          />
          <label>SKU</label>
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setincludedSkus("Toplu SKU");
          }}
        >
          <input
            style={{ backgroundImage: `url(${checkForm})` }}
            type="radio"
            value={includedSkus}
            name="includedSkus"
            checked={includedSkus === "Toplu SKU"}
          />
          <label> Toplu SKU</label>
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setincludedSkus("Ürün Etiketi");
          }}
        >
          <input
            style={{ backgroundImage: `url(${checkForm})` }}
            type="radio"
            value={includedSkus}
            name="includedSkus"
            checked={includedSkus === "Ürün Etiketi"}
          />
          <label> Ürün Etiketi</label>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
