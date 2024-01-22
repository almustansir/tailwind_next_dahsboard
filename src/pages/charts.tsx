import React from "react";
import SideBarComp from "../components/SideBarComp";
import BarChartComp from "../components/BarChartComp";

const charts = () => {
  return (
    <div className="p-4 sm:ml-64">
      <SideBarComp />
      <div>
        <BarChartComp />
        <BarChartComp />
        <BarChartComp />
        <BarChartComp />
      </div>
    </div>
  );
};

export default charts;
