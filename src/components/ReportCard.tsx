import React from 'react';

interface ReportCardProps {
  key: number;
  title: string;
  description: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ key, title, description }) => {
  return (
    <div className="report-card">
      <h2>{title}</h2>
        <div>{description}</div> 
    </div>
  );
};

export default ReportCard;