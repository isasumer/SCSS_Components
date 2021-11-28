import React, { useState } from "react";
import "../../styles/components/SolutionCenterSSS.scss";
import axios from "axios";

const SolutionCenterSSS = () => {
  const [data, setData] = useState([]);

  return (
    <div className="sss-container">
      <div className="sss-header">Merak Edilenler</div>
      <div className="sss-wrapper">
        <div className="sss-wrapper-left">
          <ul>
            <li>
              <img src="" alt="" />
              <p></p>
            </li>
          </ul>
        </div>
        <div className="sss-wrapper-right">right</div>
      </div>
    </div>
  );
};

export default SolutionCenterSSS;
