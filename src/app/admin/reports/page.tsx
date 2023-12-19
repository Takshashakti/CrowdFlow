import React from "react";
import DashboardSidePannel from "@/components/DashboardSidePannel";

import { Reports_data } from "@/lib/config/config";

function ReportsPage() {
  return (
    <>
      <DashboardSidePannel activeTab="report" />
      <div className="p-4 sm:ml-[calc(15vw)]">
        <div className="grid grid-cols-4 gap-4 mb-4 bg-violet-200 rounded p-2">
          <div className="flex items-center justify-center p-2 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-base text-gray-400 dark:text-gray-500">Today</p>
          </div>
          <div className="flex items-center justify-center p-2 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-base text-gray-400 dark:text-gray-500">
              This Week
            </p>
          </div>
          <div className="flex items-center justify-center p-2 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-base text-gray-400 dark:text-gray-500">
              This Month
            </p>
          </div>
          <div className="flex items-center justify-center p-2 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-base text-gray-400 dark:text-gray-500">
              This Year
            </p>
          </div>
        </div>

        <div className="pb-4 bg-white flex justify-center">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-violet-200 rounded-lg w-[calc(30vw)] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for reports"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Reports_data.map((report, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 hover:bg-violet-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {report.title}
                    </th>
                    <td className="px-6 py-4">{report.address}</td>
                    <td className="px-6 py-4">{report.category}</td>
                    <td className="px-6 py-4">{report.date}</td>
                    <td className="px-6 py-4">{report.time}</td>
                    <td className="px-6 py-4">
                      <a
                        href={`reports${report.href}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ReportsPage;
