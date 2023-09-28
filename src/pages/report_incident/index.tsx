import { useRouter } from "next/router";
import React, { useRef, useState } from "react";



function ReportIncidentPage() {
const phoneRef = useRef<HTMLInputElement>(null);
const router = useRouter();
return (
    <div className="flex flex-col px-6 h-7">
      <h1 className="pb-16 pt-10 text-2xl text-blue-800 font-bold"><center> Report Incident </center></h1>
      <form className="flex flex-col ">
        <div className="flex flex-col gap-7"></div>
        <div className="flex flex-col">
                <div className="flex justify-between font-bold"></div>
                <input
                type="text"
                name="Name"
                className=" border px-1 py-2 text-l rounded-md bg-slate-100"
                ref={phoneRef}
                placeholder=" Report Name"
                />
            </div>
            <br></br>
            <div className="flex flex-col">
                <div className="flex justify-between font-bold"></div>
                <input
                type="text"
                name="Name"
                className=" border h-44 px-1 py-2 text-l rounded-md bg-slate-100"
                ref={phoneRef}
                placeholder=" Report Description"
                />
            </div>
            <br></br>
            <div className="flex flex-col">
                <div className="flex justify-between font-bold"></div>
                <input
                type="text"
                name="Name"
                className=" border px-1 py-2 text-l rounded-md bg-slate-100"
                ref={phoneRef}
                placeholder=" Report Type"
                />
            </div>
            <br></br>
            <div className="flex ">
            <div className="flex justify-between font-bold">
                <label htmlFor="phone">
                <input
                type="checkbox "
                name=" checkbox"
                className=" border  w-1 h-1  px-2 py-2  rounded-sm bg-slate-200"
                ref={phoneRef}
                />
                 <span className="checkmark"></span> 
              </label></div>
                <div className="flex justify-between mx-4 font-italic">
                <label htmlFor="phone">I declare my report as accurate. I will be held accountable in case of any wrong reporting.</label>
                </div>
            </div>
            <br></br>


            <button
            type="submit"
            className="bg-[#4172DC] py-4 text-white rounded-2xl">
            Report Incident
            </button>
            </form>
    </div>
  );
}
export default ReportIncidentPage;   