import React from "react";
import hepsiburada from "../assets/Solution Center/hepsiburada@3x.png";
import categoriesIcon from "../assets/Solution Center/categories@3x.png";
import searchIcon from "../assets/Solution Center/search.png";
import cart from "../assets/Solution Center/my-cart@3x.png";
import orders from "../assets/Solution Center/my-order@3x.png";

const SolutionCenterHeader = () => {
  return (
    <div>
      <div className="solution-header">
        <img
          src={hepsiburada}
          alt="hepsiburada"
          className="solution-header-image"
        />
        <img
          src={categoriesIcon}
          alt="categoriesIcon"
          className="solution-header-categories-icon"
        />
        <div className="solution-header-categories-title">Kategoriler</div>
        <div className="solution-header-search">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="solution-header-search-icon"
          />
          <input
            placeholder="25 milyon’dan fazla ürün içinde ara"
            type="text"
            className="solution-header-search-input"
          />
        </div>
        <div className="solution-header-cart">
          <img className="solution-header-cart-icon" src={cart} alt="cart" />
          <span className="solution-header-cart-bubble">2</span>
        </div>
        <div className="solution-header-cart-text">Sepetim</div>
        <img
          className="solution-header-orders-icon"
          src={orders}
          alt="orders"
        />
        <div className="solution-header-orders-text">Siparişlerim</div>
        <div className="solution-header-login">İS</div>
      </div>
    </div>
  );
};

export default SolutionCenterHeader;
