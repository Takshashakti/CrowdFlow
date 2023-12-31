import React from "react";
import ReportCard from "@/components/ReportCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page: React.FC = () => {
  const ongoingReports = [
    {
      id: 1,
      title: "Ongoing Report 1",
      description: "This is the description for Ongoing Report 1",
      href: "#",
    },
    {
      id: 2,
      title: "Ongoing Report 2",
      description: "This is the description for Ongoing Report 2",
      href: "#",
    },
    {
      id: 3,
      title: "Ongoing Report 3",
      description: "This is the description for Ongoing Report 3",
      href: "#",
    },
  ];

  const resolvedReports = [
    {
      id: 4,
      title: "Resolved Report 1",
      description: "This is the description for Resolved Report 1",
      href: "#",
    },
    {
      id: 5,
      title: "Resolved Report 2",
      description: "This is the description for Resolved Report 2",
      href: "#",
    },
    {
      id: 6,
      title: "Resolved Report 3",
      description: "This is the description for Resolved Report 3",
      href: "#",
    },
  ];

  return (
    <div>
      <Tabs defaultValue="ongoingReports" className="w-[calc(100vw)]">
        <TabsList>
          <TabsTrigger value="ongoingReports">Ongoing Reports</TabsTrigger>
          <TabsTrigger value="resolvedReports">Resolved Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoingReports">
          {ongoingReports.map((report) => (
            <ReportCard
              key={report.id}
              title={report.title}
              description={report.description}
              href={report.href}
            />
          ))}
        </TabsContent>
        <TabsContent value="resolvedReports">
          {resolvedReports.map((report) => (
            <ReportCard
              key={report.id}
              title={report.title}
              description={report.description}
              href={report.href}
            />
          ))}
        </TabsContent>
      </Tabs>

      {/* </div>
            <h1>Ongoing Reports</h1>
            {ongoingReports.map((report) => (
                <ReportCard key={report.id} title={report.title} description={report.description} />
            ))}

            <h1>Resolved Reports</h1>
            {resolvedReports.map((report) => (
                <ReportCard key={report.id} title={report.title} description={report.description} />
            ))} */}
    </div>
  );
};

export default Page;
