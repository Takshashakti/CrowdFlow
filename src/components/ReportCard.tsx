import React from 'react';

interface ReportCardProps {
  key: number;
  title: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ key, title }) => {
  return (
    <div className="report-card">
      <h2>{title}</h2>
    </div>
  );
};

export default ReportCard;