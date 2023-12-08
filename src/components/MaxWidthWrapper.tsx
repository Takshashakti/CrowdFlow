import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-md px-2.5 md:px-20 py-5 h-[100dvh]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
