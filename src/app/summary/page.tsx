"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

function summaryPage() {}

const PGD = `
{
  "data": [
    {
      "data": [
        "None",
        "Hyderabad",
        "Medchal\u2013Malkajgiri",
        "Warangal",
        "Khammam"
      ],
      "title": "Top 5 Districts with most reports"
    },
    {
      "data": ["Hyderabad", "city", "Warangal", "Khammam", "Adilabad"],
      "title": "Top 5 Cities with most reports"
    },
    {
      "data": [
        "Water Shortage",
        "Flooding",
        "Pollution",
        "Water Quality",
        "Water Leakage"
      ],
      "title": "Top 5 Types of Reports"
    },
    {
      "data": "Summary:\n\nOver the past 0.0008616666666666666 days, multiple reports from different districts in Telangana have highlighted various water-related issues and their consequences. The reports indicate a correlation between these issues, emphasizing the urgent need for intervention and measures to address the problems.\n\n1. Hyderabad, Hyderabad: Severe flooding near Hussain Sagar Lake has caused significant damage to homes and infrastructure. This flooding has disrupted normal life and caused distress among residents.\n\n2. Warangal, Warangal: The district is facing a water shortage crisis, affecting agriculture and daily life. Immediate intervention is required to address this issue.\n\n3. Khammam, Khammam: Concerns have been raised about the water quality in Khammam, with residents experiencing health issues due to contaminated water supply. Urgent steps are needed to ensure clean and safe water for the residents.\n\n4. Adilabad, Adilabad: Outbreaks of water-borne diseases have been reported in Adilabad district, overwhelming medical facilities. Urgent health measures are required to control the situation.\n\n5. Secunderabad, Hyderabad: Persistent water leakage in Secunderabad has caused damage to roads and inconvenience to residents. Immediate repairs are necessary to address this issue.\n\n6. Nizamabad, Nizamabad: Rampant water theft in Nizamabad district is affecting agricultural activities. Strict measures need to be implemented to deter offenders.\n\n7. Karimnagar, Karimnagar: Water logging in Karimnagar has caused traffic disruptions and poses a threat to public safety. Improvements in the drainage system are urgently needed.\n\n8. Mahbubnagar, Mahbubnagar: A major flooding incident has occurred in Mahbubnagar district, requiring emergency response, evacuation, and relief efforts.\n\n9. Nalgonda, Nalgonda: The water shortage crisis in Nalgonda has intensified, affecting both urban and rural areas. Immediate augmentation of water supply is necessary.\n\nThe reports highlight various water-related issues such as flooding, water shortage, contamination, leakage, theft, and pollution. These issues have had severe consequences on infrastructure, agriculture, public health, and daily life. The correlation between these reports emphasizes the need for comprehensive measures to address the underlying causes and ensure the availability of clean and sustainable water sources for the affected districts.",
      "title": "All Descriptions"
    },
    {
      "data": "{\n  \"reports\": [\n    {\n      \"location\": \"Hyderabad\",\n      \"type\": \"flooding\",\n      \"affected_people\": \"residents\",\n      \"financial_losses\": \"significant damage\",\n      \"description\": \"Severe flooding reported near Hussain Sagar Lake, causing significant damage to nearby homes and infrastructure.\"\n    },\n    {\n      \"location\": \"Warangal\",\n      \"type\": \"water shortage\",\n      \"affected_people\": \"agriculture, daily life\",\n      \"financial_losses\": null,\n      \"description\": \"Water shortage crisis in Warangal district, affecting agriculture and daily life. Urgent intervention needed to address the issue.\"\n    },\n    {\n      \"location\": \"Khammam\",\n      \"type\": \"water quality\",\n      \"affected_people\": \"residents\",\n      \"financial_losses\": null,\n      \"description\": \"Concerns raised about water quality in Khammam. Residents experiencing health issues due to contaminated water supply.\"\n    },\n    {\n      \"location\": \"Hyderabad\",\n      \"type\": \"pollution\",\n      \"affected_people\": \"aquatic life, ecosystem\",\n      \"financial_losses\": null,\n      \"description\": \"Pollution in Musi River alarming. Visible impact on aquatic life and ecosystem. Immediate steps needed to curb further deterioration.\"\n    },\n    {\n      \"location\": \"Adilabad\",\n      \"type\": \"water-borne diseases\",\n      \"affected_people\": \"residents\",\n      \"financial_losses\": null,\n      \"description\": \"Outbreak of water-borne diseases in Adilabad district. Medical facilities overwhelmed, urgent health measures required.\"\n    },\n    {\n      \"location\": \"Secunderabad\",\n      \"type\": \"water leakage\",\n      \"affected_people\": \"residents\",\n      \"financial_losses\": null,\n      \"description\": \"Persistent water leakage reported in Secunderabad, causing damage to roads and inconvenience to residents. Immediate repair necessary.\"\n    },\n    {\n      \"location\": \"Nizamabad\",\n      \"type\": \"water theft\",\n      \"affected_people\": \"agricultural activities\",\n      \"financial_losses\": null,\n      \"description\": \"Rampant water theft in Nizamabad district affecting agricultural activities. Authorities urged to implement strict measures against offenders.\"\n    },\n    {\n      \"location\": \"Karimnagar\",\n      \"type\": \"water logging\",\n      \"affected_people\": \"public safety\",\n      \"financial_losses\": null,\n      \"description\": \"Water logging in Karimnagar causing traffic disruptions and posing a threat to public safety. Drainage system improvements needed urgently.\"\n    },\n    {\n      \"location\": \"Mahbubnagar\",\n      \"type\": \"flooding\",\n      \"affected_people\": \"evacuation, relief efforts\",\n      \"financial_losses\": null,\n      \"description\": \"Emergency response needed for a major flooding incident in Mahbubnagar district. Evacuation and relief efforts required.\"\n    },\n    {\n      \"location\": \"Nalgonda\",\n      \"type\": \"water shortage\",\n      \"affected_people\": \"urban areas, rural areas\",\n      \"financial_losses\": null,\n      \"description\": \"Water shortage crisis intensifies in Nalgonda, affecting both urban and rural areas. Immediate water supply augmentation needed.\"\n    },\n    {\n      \"location\": \"Hyderabad\",\n      \"type\": \"flooding\",\n      \"affected_people\": \"residents\",\n      \"financial_losses\": null,\n      \"description\": \"Severe flooding reported in the heart of Hyderabad, causing distress among residents and disrupting normal life.\"\n    },\n    {\n      \"location\": \"Nizamabad\",\n      \"type\": \"water shortage\",\n      \"affected_people\": \"agriculture, daily activities\",\n      \"financial_losses\": null,\n      \"description\": \"Village in Nizamabad facing acute water shortage, affecting agriculture and daily activities. Urgent intervention needed.\"\n    },\n    {\n      \"location\": \"Warangal\",\n      \"type\": \"water supply\",\n      \"affected_people\": \"public health\",\n      \"financial_losses\": null,\n      \"description\": \"Contaminated water supply reported in Warangal, posing a serious threat to public health. Immediate water quality assessment required.\"\n    },\n    {\n      \"location\": \"Khammam\",\n      \"type\": \"industrial pollution\",\n      \"affected_people\": \"local water sources\",\n      \"financial_losses\": null,\n      \"description\": \"Industrial pollution in Khammam district causing harm to local water sources. Urgent measures needed to address the environmental impact.\"\n    },\n    {\n      \"location\": \"Adilabad\",\n      \"type\": \"waterborne diseases\",\n      \"affected_people\": \"medical assistance, water sanitation\",\n      \"financial_losses\": null,\n      \"description\": \"Outbreak of waterborne diseases reported in Adilabad. Immediate medical assistance and water sanitation measures required.\"\n    }\n  ]\n}",
      "title": "Tags"
    },
    {
      "data": "<!doctype html>\n<html lang=en>\n<title>500 Internal Server Error</title>\n<h1>Internal Server Error</h1>\n<p>The server encountered an internal error and was unable to complete your request. Either the server is overloaded or there is an error in the application.</p>\n",
      "title": "Suggested Solutions"
    }
  ],
  "end_time": "1703062574448",
  "num_incidents": 4,
  "num_reports": 34,
  "start_time": "1703062500000",
  "state": "Telangana",
  "title": "Summary of Water Related Incidents/Problems for the state of Telangana from 1703062500000 to 1703062574448"
}

`

export default function Summary() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch JSON data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://9e2a-103-248-208-100.ngrok-free.app/?startTime=1703062500000&endTime=1703062574448&state=Telangana"
        ); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 align-middle pb-6 pt-10 text-2xl text-center font-bold">
      <h2>Generate Summary</h2>

      <form className="flex font-semibold  ">
        <label form="state" className="flex text-l">
          State:
        </label>
        <input
          type="text"
          id="state"
          name="state"
          className="mx-4 border w-[80%] px-1 py-2  text-md rounded-md bg-slate-100"
        />
      </form>
      <br></br>
      <div date-rangepicker className="flex items-center px-4">
        <span className="mx-4 text-gray-500">From</span>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            name="start"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span className="mx-4 text-gray-500">to</span>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            name="end"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
          />
        </div>
      </div>
      <br></br>
      <button
        type="submit"
        className="bg-[black] items-center py-4 w-full text-white rounded-lg"
        onClick={() => {}}
      >
        Generate
      </button>
      <Button>Show Pre-Generated Data</Button>

      <span className="">
        <code className="text-sm text-left">
          {PGD}
        </code>
      </span>
    </div>
  );
}
