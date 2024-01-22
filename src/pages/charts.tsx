import React from "react";
import SideBarComp from "../components/SideBarComp";
import BarChartComp from "../components/BarChartComp";

const charts = () => {
  return (
    <div className="p-4 sm:ml-64">
      <SideBarComp />
      <div>
        <div className=" text-center text-3xl font-bold text-blue-600 mb-5">
          Charts
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" flex flex-row gap-2">
            <BarChartComp />
            <BarChartComp />
          </div>
          <div className=" flex flex-row gap-2">
            <BarChartComp />
            <BarChartComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default charts;
