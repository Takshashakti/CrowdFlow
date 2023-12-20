"use client";

import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

function summaryPage(){}

export default function Summary(){

  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('https://9e2a-103-248-208-100.ngrok-free.app/?startTime=1703062500000&endTime=1703062574448&state=Telangana'); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  }, []);




  return (
<div className="flex flex-col gap-3 align-middle pb-6 pt-10 text-2xl text-center font-bold">
     <h2>Generate Summary</h2>

<form className="flex font-semibold  ">
    <label form="state" className="flex text-l">State:</label>
    <input type="text" id="state" name="state" className="mx-4 border w-[80%] px-1 py-2  text-md rounded-md bg-slate-100"/>
</form>
<br></br>
<div date-rangepicker className="flex items-center px-4">
<span className="mx-4 text-gray-500">From</span>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
  </div>
  <span className="mx-4 text-gray-500">to</span>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
</div>
</div>
<br></br>
<button type="submit" className="bg-[black] items-center py-4 w-full text-white rounded-lg" onClick={() => {
 
}}>
        Generate
</button>



</div>

)}
