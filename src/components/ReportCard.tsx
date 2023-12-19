import { cn } from '@/lib/utils';
import React from 'react';

interface ReportCardProps {
  key: number;
  title: string;
  description: string;
  className?: string;
  href: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ key, title, description, href, className }) => {
  return (
    <div className={cn(`w-fit bg-slate-100 mx-auto my-2 py-2 px-5 border rounded-md`,className)}>
    <div className="font-bold">
      <h2>{title}</h2></div>
        <div className="">{description}</div> 
    </div>

    // <div className="flex flex-col px-6 h-12">
    // <div className="px=5 py=5">
    // </div>
    // <div id="report incident" className="border flex gap-5 px-5 py-auto text-l rounded-sm bg-slate-100 flex-col justify-end">
    //   <div className="flex flex-row">
    //   <div>{title}</div>
    //   <div>{description}</div>
    //   </div></div></div>
  );
};

export default ReportCard;



