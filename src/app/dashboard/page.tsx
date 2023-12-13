"use client";

import React from "react";
import Image from "next/image";
import SummaryCard from "../../components/SummaryCard";
import ChartCard from "../../components/ChartCard";
import DashboardSidePannel from "@/components/DashboardSidePannel";

import { Chart, CategoryScale, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

Chart.register(CategoryScale);
defaults.maintainAspectRatio = false;
defaults.responsive = true;

import {
  Reports_Timeline,
  Top_5_Incedent_Category,
  Agewise_Report,
} from "@/lib/config/config";

function DashboardPage() {
  return (
    <>
      <DashboardSidePannel activeTab="dashboard" />

      <div className="p-4 sm:ml-[calc(15vw)]">
        <h3 className="text-3xl font-bold text-gray-700 my-4">
          Welcome, Naihati Municipality
        </h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center justify-center h-24 rounded bg-violet-50">
            <p className="text-base text-gray-600">Total Reports</p>
            <h3 className="text-3xl font-bold text-gray-700">250</h3>
          </div>

          <div className="flex flex-col items-center justify-center h-24 rounded bg-violet-100">
            <p className="text-base text-gray-600">Total Resolved</p>
            <h3 className="text-3xl font-bold text-gray-700">100</h3>
          </div>

          <div className="flex flex-col items-center justify-center h-24 rounded bg-violet-200">
            <p className="text-base text-gray-600">Total Resolve Pending</p>
            <h3 className="text-3xl font-bold text-gray-700">150</h3>
          </div>
        </div>
        <div className="h-[calc(30vh)] mb-4 p-4 pb-8 rounded bg-gray-50 dark:bg-gray-800">
          <h3 className="text-2xl font-bold text-gray-700">Reports Timeline</h3>
          <Line
            data={{
              labels: Reports_Timeline.map((data) => data.label),
              datasets: [
                {
                  label: "Reports",
                  data: Reports_Timeline.map((data) => data.reports),
                  backgroundColor: "#723",
                  borderColor: "#f99",
                  fill: false,
                },
                {
                  label: "Resolved",
                  data: Reports_Timeline.map((data) => data.resolved),
                  backgroundColor: "#141",
                  borderColor: "#292",
                  fill: false,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.2,
                },
              },
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="h-[calc(25vh)] mb-4 p-4 pb-8 rounded bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-bold text-gray-700">
              Top 5 Report Category
            </h3>
            <Bar
              data={{
                labels: Top_5_Incedent_Category.map(
                  (category) => category.category
                ),
                datasets: [
                  {
                    label: "Reports",
                    data: Top_5_Incedent_Category.map(
                      (category) => category.reports_count
                    ),
                  },
                  {
                    label: "Resolved",
                    data: Top_5_Incedent_Category.map(
                      (category) => category.resolved_count
                    ),
                  },
                ],
              }}
            />
          </div>
          <div className="h-[calc(25vh)] mb-4 p-4 pb-8 rounded bg-gray-50 dark:bg-gray-800 overflow-hidden">
            <h3 className="text-xl font-bold text-gray-700">Agewise Reports</h3>
            <Doughnut
              data={{
                labels: Agewise_Report.map((AgeGroup) => AgeGroup.range),
                datasets: [
                  {
                    label: "Reports",
                    data: Agewise_Report.map((AgeGroup) => AgeGroup.count),
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    position: "right",
                    align: "center",
                  },
                },
              }}
            />
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
