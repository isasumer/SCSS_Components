import React from "react";
import "../styles/pages/solutionCenterPage.scss";

import SolutionCenterTopContent from "../components/SolutionCenterTopContent";
import SolutionCenterHeader from "../components/SolutionCenterHeader";

const SolutionCenterPage = () => {
  return (
    <div className="solution-container">
      <SolutionCenterHeader />
      <SolutionCenterTopContent />
    </div>
  );
};

export default SolutionCenterPage;
