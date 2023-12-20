import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface ListIemProps {
  children: ReactNode;
  className?: String;
}

const NotificationItems: React.FC<ListIemProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `
    flex
    justify-start
    w-full
    text-center
    items-center
    py-2 px-2
    bg-slate-100 
    backdrop-blur-sm 
    my-2

    `,
        className
      )}
    >
      <div className="font-medium text-left truncate w-[65%]">{children}</div>

      <Dialog>
        <DialogTrigger className="bg-black w-[35%] px-2 py-2 text-center items-center rounded-md text-white">
          View Details
        </DialogTrigger>
        <DialogContent className="px-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Report Details
            </DialogTitle>
            <br></br>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>  
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NotificationItems;
