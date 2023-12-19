import { cn } from "@/lib/utils";
import { Dialog, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogContent, DialogHeader } from '@/components/ui/dialog';


interface ListIemProps {
  children: ReactNode;
  className?: String;
}

const NotificationItems: React.FC<ListIemProps> = ({children, className}) => {
    return <div className={cn(`
    flex
    justify-center
    w-[103%]
    items-center
    text-center
    py-2 px-2
    bg-slate-100 
    backdrop-blur-sm 
    my-2

    `, className)
    }>
      
        <div className="font-medium truncate">
          {children}
        </div>
        <Dialog>
              <DialogTrigger className="bg-black w-auto px-2 py-2 flex rounded-md text-white justify-end ml-[10%]">
                {" "}
                View Details{" "}
              </DialogTrigger>
              <DialogContent className="px-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">
                    Report Details
                  </DialogTitle>
                  <br></br>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
  
      
      </div>;
  };
  
  export default NotificationItems;
