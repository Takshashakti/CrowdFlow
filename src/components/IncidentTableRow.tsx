import React, { useEffect, useState } from "react";

interface Report {
  id: number;
  user_id: number;
  title: string;
  description: string;
  image_url: string;
  type: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  district: string;
  time: number;
  incidents_id: number;
}

function ReportsPage({incidentId, key} : {
    incidentId: number,
    key: number,
}) {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://crowdflowworkers.karmakarmeghdip.workers.dev/report/getByIncident?incidentsId=${incidentId}`
      );
      const reportRes = (await res.json()) as Report[];
      console.log(reportRes);
      setReports(reportRes);
    })();
  }, []);

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 hover:bg-violet-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {reports[0]?.title ||  "Incedent Title"}
        </th>
        <td className="px-6 py-4">{0}</td>
        <td className="px-6 py-4">{reports[0]?.type || "Category"}</td>
        <td className="px-6 py-4">{0}</td>
        <td className="px-6 py-4">{reports[0]?.time}</td>
        <td className="px-6 py-4">
          <a
            href={`./reports/${incidentId}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </a>
        </td>
      </tr>
    </>
  );
}

export default ReportsPage;
