import React from "react";
import Image from "next/image";
import Layout from "~/components/layout";
import SummaryCard from "~/components/SummaryCard";
import ChartCard from "~/components/ChartCard";

function DashboardPage() {
  return (
    <Layout>
      <div className="mb-[max(12vh)] flex flex-col">
        <div className="flex justify-between bg-violet-800 px-4 py-2 text-white">
          <h1>E</h1>
          <h1 className="text-2xl">HOME</h1>
          <h1>O</h1>
        </div>
        <div className="mt-2 flex flex-col px-3">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p>hi, Naihati Mincupality</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <ChartCard />
            <ChartCard />
            <ChartCard />
            <ChartCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
