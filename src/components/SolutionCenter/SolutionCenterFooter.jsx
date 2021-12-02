import React from "react";
import "../../styles/components/SolutionCenterFooter.scss";
import visa from "../../assets/Solution Center/visa.png";
import dol from "../../assets/Solution Center/footer-logo-dol.png";
import ac from "../../assets/Solution Center/footer-logo-ac.png";
import nesine from "../../assets/Solution Center/footer-logo-nesine.png";
import kesfet from "../../assets/Solution Center/kesfet-hb-logo.png";
import bonus from "../../assets/Solution Center/bonuscard-logo.png";
import maximum from "../../assets/Solution Center/maximum-logo.png";
import yapıkredi from "../../assets/Solution Center/yap-kredi-logo.png";
import ziraat from "../../assets/Solution Center/ziraat-bankkart-red.png";
import cardfinans from "../../assets/Solution Center/cardfinans-logo.png";
import axess from "../../assets/Solution Center/axess.png";
import advantage from "../../assets/Solution Center/advantage.png";
import paraf from "../../assets/Solution Center/logo_2.png";
import mastercard from "../../assets/Solution Center/mastercard-logo.png";
import ae from "../../assets/Solution Center/logo.png";

const SolutionCenterFooter = () => {
  return (
    <div className="solution-center-footer">
      <div className="solution-center-footer-left">
        <div className="solution-center-footer-left-top">
          <div className="solution-center-footer-left-top-text">
            İNTERNETTE GÜVENLİ ALIŞVERİŞ
          </div>
          <img src={visa} alt="norton" />
        </div>
        <div className="solution-center-footer-left-bottom">
          <img src={dol} alt="dol" />
          <img src={ac} alt="ac" />
          <img src={nesine} alt="nesine" />
          <img src={kesfet} alt="kesfet" />
        </div>
      </div>
      <div className="solution-center-footer-right">
        <div className="solution-center-footer-right-top">
          <img src={bonus} alt="bonus" />
          <img src={maximum} alt="maximum" />
          <img src={yapıkredi} alt="yapıkredi" />
          <img src={ziraat} alt="ziraat" />
          <img src={cardfinans} alt="cardfinans" />
          <img src={axess} alt="axess" />
          <img src={advantage} alt="advantage" />
          <img src={paraf} alt="paraf" />
          <img src={mastercard} alt="mastercard" />
          <img src={ae} alt="ae" />
        </div>
        <div className="solution-center-footer-right-bottom">
          <div className="solution-center-footer-right-bottom-text">
            <span>
              Her şey ayağına gelsin! © Copyright 1998 - 2018 D-MARKET
              Elektronik Hizmetler Tic. A.Ş. Her Hakkı Saklıdır.
            </span>
            <span>Hepsiburada.com, Bir Doğan Online Markasıdır.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCenterFooter;
