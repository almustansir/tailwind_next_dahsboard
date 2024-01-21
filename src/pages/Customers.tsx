import React from "react";
import SideBarComp from "../components/SideBarComp";

const Customers = () => {
  return (
    <div className="p-4 sm:ml-64">
      <SideBarComp />
      <div>
        <h4 className=" text-3xl">Customers List:</h4>
        <div className="flex flex-col items-center justify-center mb-4 rounded bg-gray-50 border-2 border-gray-200">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Due
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Islam MD S
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">02 February, 2024</td>
                <td className="px-6 py-4">৳ 10,000</td>
              </tr>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Khodejs Begum
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">01 February, 2024</td>
                <td className="px-6 py-4">৳ 10,000</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Mateo Evelyn J
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">03 February, 2024</td>
                <td className="px-6 py-4">৳ 8,000</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Blake Down
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">03 February, 2024</td>
                <td className="px-6 py-4">৳ 4,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;