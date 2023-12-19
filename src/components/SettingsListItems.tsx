"use client";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface ListIemProps {
  name: string;
  href: string;
}

const SettingsListItems: React.FC<ListIemProps> = ({ name, href }) => {
  const router = useRouter();
  const onClick = () => {
    //add authentication before push
    router.push(href);
  };
  return (
    <div>
      <Link
        className={cn(
          "w-full my-5 font-medium truncate pb-10 pt-10 ",
          buttonVariants({ variant: "default" })
        )}
        href={href}
      >
        {name}
      </Link>
    </div>
  );
};

export default SettingsListItems;
