import React from 'react';
import ReportCard from '@/components/ReportCard';

const Page: React.FC = () => {
    const ongoingReports = [
        { id: 1, title: 'Ongoing Report 1', description: 'This is the description for Ongoing Report 1' },
        { id: 2, title: 'Ongoing Report 2', description: 'This is the description for Ongoing Report 2' },
        { id: 3, title: 'Ongoing Report 3', description: 'This is the description for Ongoing Report 3' },
    ];

    const resolvedReports = [
        { id: 4, title: 'Resolved Report 1', description: 'This is the description for Resolved Report 1' },
        { id: 5, title: 'Resolved Report 2', description: 'This is the description for Resolved Report 2' },
        { id: 6, title: 'Resolved Report 3', description: 'This is the description for Resolved Report 3' },
    ];

    return (
        <div>
            <h1>Ongoing Reports</h1>
            {ongoingReports.map((report) => (
                <ReportCard key={report.id} title={report.title} description={report.description} />
            ))}

            <h1>Resolved Reports</h1>
            {resolvedReports.map((report) => (
                <ReportCard key={report.id} title={report.title} description={report.description} />
            ))}
        </div>
    );
};

export default Page;