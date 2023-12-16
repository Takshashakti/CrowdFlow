import { cn } from "@/lib/utils";
import { ReactNode } from "react";


interface ListIemProps {
  children: ReactNode;
  className?: String;
}

const AccountPageItems: React.FC<ListIemProps> = ({children, className}) => {
  return <div className={cn(`flex 
  relative
  items-start
  justify-center
  w-fit
  rounded-lg
  h-fit p-5 
  bg-neutral-900 
  backdrop-blur 
  opacity-50
  py-5
  m-2
  `, className)
  }>
    
      <span className="font-medium truncate pb-3 pt-3">
        {children}
      </span>

    
    </div>;
};

export default AccountPageItems;
