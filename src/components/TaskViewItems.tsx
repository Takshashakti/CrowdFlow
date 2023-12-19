import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface ListIemProps {
  children: ReactNode;
  className?: String;
}

const TaskViewItems: React.FC<ListIemProps> = ({ children, className }) => {
  const [taskAccept, setAccepted] = useState(false);
  const [taskResolved, setResolveded] = useState(false);

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

      {!taskAccept && (
        <Dialog>
          <DialogTrigger
            onClick={() => setAccepted(true)}
            className="bg-black w-[35%] px-2 py-2 text-center items-center rounded-md text-white"
          >
            Accept Task
          </DialogTrigger>

          <DialogContent className="px-6">
            <DialogTitle className="text-2xl font-bold text-center">
              Task Accepted!
            </DialogTitle>
            <DialogDescription>Thank you for helping.</DialogDescription>
          </DialogContent>
        </Dialog>
      )}

      {taskAccept && !taskResolved && (
        <Dialog>
          <DialogTrigger
            onClick={() => setResolveded(true)}
            className="bg-black w-[35%] px-2 py-2 text-center items-center rounded-md text-white"
          >
            Resolve Task
          </DialogTrigger>

          <DialogContent className="px-6">
            <DialogHeader>Task Resolved</DialogHeader>
          </DialogContent>
        </Dialog>
      )}
      {taskResolved && (
        <DialogTrigger className="bg-black w-[35%] px-1 py-2 text-center items-center rounded-md text-white">
          Task Resolved
        </DialogTrigger>
      )}
    </div>
  );
};

export default TaskViewItems;
