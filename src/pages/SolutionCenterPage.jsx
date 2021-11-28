import React from "react";
import "../styles/pages/solutionCenterPage.scss";

import SolutionCenterTopContent from "../components/SolutionCenter/SolutionCenterTopContent";
import SolutionCenterHeader from "../components/SolutionCenter/SolutionCenterHeader";
import SolutionCenterSSS from "../components/SolutionCenter/SolutionCenterSSS";

const SolutionCenterPage = () => {
  return (
    <div className="solution-container">
      <SolutionCenterHeader />
      <SolutionCenterTopContent />
      <SolutionCenterSSS />
    </div>
  );
};

export default SolutionCenterPage;
