import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ListIemProps {
  children: ReactNode;
  className?: String;
}

const AccountPageItems: React.FC<ListIemProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `
  items-start
  justify-center
  w-full
  rounded-lg
  h-fit p-5 
  bg-slate-100 
  backdrop-blur-sm 
  py-2
  mx-auto
  my-2
  border
  `,
        className
      )}
    >
      <div className="font-medium">{children}</div>
    </div>
  );
};

export default AccountPageItems;
