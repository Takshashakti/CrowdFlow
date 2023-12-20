"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SummaryCard from "../../components/SummaryCard";
import ChartCard from "../../components/ChartCard";
import DashboardSidePannel from "@/components/DashboardSidePannel";
import DatamapsIndia from "react-datamaps-india";

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
  let total_reports = 0;
  let pending_reports = 0;
  let resolved_reports = 0;

  let monthly_timeline: any = [];

  const [Reports, setReports] = useState<Report[]>([]);
  const phoneNumRef = useRef<HTMLInputElement>(null);

  const getMonthFromTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.getMonth();
  };

  const searchForUsers = async () => {
    // e.preventDefault();

    const reportAll = await fetch(
      "https://crowdflowworkers.karmakarmeghdip.workers.dev/incident/getall"
    );

    const data = await reportAll.json();
    console.log(data);
    setReports(data);

    console.log(data.length);

    total_reports = data.length;
    pending_reports = data.filter(function (report: any) {
      return report.status == "pending";
    }).length;
    resolved_reports = data.length;

    interface MonthlyCount {
      reports: number;
      resolved: number;
    }

    interface MonthlyCounts {
      [month: number]: MonthlyCount;
    }
    const monthlyCounts: MonthlyCounts = {};

    data.forEach((report: any) => {
      const month = getMonthFromTimestamp(report.time);
      monthlyCounts[month] = monthlyCounts[month] || {
        reports: 0,
        resolved: 0,
      };
      monthlyCounts[month].reports++;
      // Assuming some logic to determine if the issue is resolved
      if (report.status == "resolved") {
        monthlyCounts[month].resolved++;
      }
    });
    const monthNames: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const resultArray = Object.entries(monthlyCounts).map(
      ([month, counts]) => ({
        label: monthNames[parseInt(month, 10)],
        reports: counts.reports,
        resolved: counts.resolved,
      })
    );

    monthly_timeline = resultArray;
  };

  useEffect(() => {
    searchForUsers();
  });

  return (
    <>
      <DashboardSidePannel activeTab="dashboard" />

      <div className="p-4 sm:ml-[calc(15vw)]">
        <h3 className="text-3xl font-bold text-gray-700 my-4">
          Welcome, Authority
        </h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center justify-center h-24 rounded bg-violet-50">
            <p className="text-base text-gray-600">Total Reports</p>
            <h3 className="text-3xl font-bold text-gray-700">10000</h3>
          </div>

          <div className="flex flex-col items-center justify-center h-24 rounded bg-violet-100">
            <p className="text-base text-gray-600">Total Resolved</p>
            <h3 className="text-3xl font-bold text-gray-700">7000</h3>
          </div>

          <div className="flex flex-col items-center justify-center h-24 rounded bg-violet-200">
            <p className="text-base text-gray-600">Total Resolve Pending</p>
            <h3 className="text-3xl font-bold text-gray-700">3000</h3>
          </div>
        </div>
        <div className="h-[calc(30vh)] mb-4 p-4 pb-8 rounded bg-gray-50 dark:bg-gray-800">
          <h3 className="text-2xl font-bold text-gray-700">Reports Timeline</h3>
          <Line
            data={{
              labels: Reports_Timeline.map((data: any) => data.label),
              datasets: [
                {
                  label: "Reports",
                  data: Reports_Timeline.map((data: any) => data.reports),
                  backgroundColor: "#723",
                  borderColor: "#f99",
                  fill: false,
                },
                {
                  label: "Resolved",
                  data: Reports_Timeline.map((data: any) => data.resolved),
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
          <div>
            <div className="h-[calc(25vh)] mb-4 p-4 pb-8 rounded bg-gray-50 dark:bg-gray-800">
              <h3 className="text-base font-bold text-gray-700">
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
              <h3 className="text-base font-bold text-gray-700">
                Agewise Reports
              </h3>
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
            <div className="h-[calc(25vh)] flex flex-col justify-center items-center  mb-4 p-4 pb-8 rounded bg-gray-50 overflow-hidden">
              <h3 className="text-base font-bold text-gray-700">Total Users</h3>
              <div>
                <h3 className="text-6xl">9000</h3>
              </div>
            </div>
          </div>
          <div className="mb-4 p-4 pb-8 rounded bg-gray-50">
            <h3 className="text-base font-bold text-gray-700">
              Reports Across Country
            </h3>
            <div className="relative cursor-crosshair">
              <DatamapsIndia
                className=""
                regionData={{
                  "Andaman & Nicobar Island": {
                    value: 150,
                  },
                  "Andhra Pradesh": {
                    value: 470,
                  },
                  "Arunanchal Pradesh": {
                    value: 248,
                  },
                  Assam: {
                    value: 528,
                  },
                  Bihar: {
                    value: 755,
                  },
                  Chandigarh: {
                    value: 95,
                  },
                  Chhattisgarh: {
                    value: 1700,
                  },
                  Delhi: {
                    value: 1823,
                  },
                  Goa: {
                    value: 508,
                  },
                  Gujarat: {
                    value: 624,
                  },
                  Haryana: {
                    value: 1244,
                  },
                  "Himachal Pradesh": {
                    value: 640,
                  },
                  "Jammu & Kashmir": {
                    value: 566,
                  },
                  Jharkhand: {
                    value: 814,
                  },
                  Karnataka: {
                    value: 2482,
                  },
                  Kerala: {
                    value: 899,
                  },
                  Lakshadweep: {
                    value: 15,
                  },
                  "Madhya Pradesh": {
                    value: 1176,
                  },
                  Maharashtra: {
                    value: 727,
                  },
                  Manipur: {
                    value: 314,
                  },
                  Meghalaya: {
                    value: 273,
                  },
                  Mizoram: {
                    value: 306,
                  },
                  Nagaland: {
                    value: 374,
                  },
                  Odisha: {
                    value: 395,
                  },
                  Puducherry: {
                    value: 245,
                  },
                  Punjab: {
                    value: 786,
                  },
                  Rajasthan: {
                    value: 1819,
                  },
                  Sikkim: {
                    value: 152,
                  },
                  "Tamil Nadu": {
                    value: 2296,
                  },
                  Telangana: {
                    value: 467,
                  },
                  Tripura: {
                    value: 194,
                  },
                  "Uttar Pradesh": {
                    value: 2944,
                  },
                  Uttarakhand: {
                    value: 1439,
                  },
                  "West Bengal": {
                    value: 1321,
                  },
                }}
                hoverComponent={({
                  value,
                }: {
                  value: {
                    name: string;
                    value: number;
                  };
                }) => {
                  return (
                    <div>
                      <div>
                        {value.name}
                        <small>
                          {" "}
                          Reports: <b>{value.value}</b>
                        </small>
                      </div>
                    </div>
                  );
                }}
                mapLayout={{
                  legendTitle: "Reports:",
                  startColor: "#b3d1ff",
                  endColor: "#005ce6",
                  hoverTitle: "Count",
                  noDataColor: "#f5f5f5",
                  borderColor: "#8D8D8D",
                  hoverColor: "blue",
                  hoverBorderColor: "green",
                  height: 5,
                  weight: 20,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
