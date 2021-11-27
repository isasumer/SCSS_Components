import React from "react";
import "../styles/components/SolutionCenterTopContent.scss";
import headImage from "../assets/Solution Center/head-image@3x.png";
import productImage from "../assets/Solution Center/item_8@3x.png";
import Buttons from "../components/Buttons";
import chevronLeft from "../assets/Solution Center/chevron-left@3x.png";
const SolutionCenterTopContent = () => {
  return (
    <div>
      <div className="solution-content-top">
        <img
          src={headImage}
          alt="headImage"
          className="solution-content-top-left"
        />
        <div className="solution-content-top-right">
          <div className="solution-content-top-right-greeting">
            Merhaba Enes Aktaş,
          </div>
          <div className="solution-content-top-right-question">
            Size nasıl yardımcı olabiliriz?
          </div>
          <div className="solution-content-top-right-btn-container">
            <Buttons
              innerText={"Siparişimle ilgili sorum var"}
              color={"primary"}
              size={"solution"}
              disabled={false} ///cursor not allowed
            />{" "}
            <Buttons
              innerText={"Farklı bir konuda sorum var"}
              color={"ghost"}
              size={"solution"}
              disabled={false} ///cursor not allowed
            />
          </div>
          <div className="solution-content-top-right-req">
            <div className="solution-content-top-right-req-label">
              Son destek talebim <span>Tümü {">"}</span>
            </div>
            <div className="solution-content-top-right-req-card">
              <div className="solution-content-top-right-req-card-top">
                <img src={productImage} alt="product" />
                <div className="solution-content-top-right-req-card-ques">
                  <div>Ürünü nasıl iade edebilirim</div>
                  <div>
                    <span>Çözüm Merkezi:</span> Merhaba Enes Bey, 5175532223
                    numaralı..
                  </div>
                </div>
                <img
                  className="solution-content-top-right-req-card-icon"
                  src={chevronLeft}
                  alt="chevronLeft"
                />
              </div>
              <table
                border="1"
                className="solution-content-top-right-req-card-bottom"
              >
                <tr>
                  <th>SON GÜNCELLEME</th>
                  <th>TALEP NO</th>
                  <th>SİPARİŞ NO</th>
                  <th>TALEP DURUMU</th>
                </tr>
                <tr>
                  <td>24 Haziran Çarşamba</td>
                  <td>23698716</td>
                  <td>12345678</td>
                  <td>Kapandı</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCenterTopContent;
