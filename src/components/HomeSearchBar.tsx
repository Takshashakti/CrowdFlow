import { SearchIcon, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from 'next/link';
import SettingsPage from "../app/settings/page";

const HomeSearchBar = () => {
  return (
    <div className="flex relative gap-1">
      <Input className="block" type="text" placeholder="Search..." />
      <Button type="submit">
        <SearchIcon className="w-6 h-6" />
      </Button>
      <Link href="/settings">
          <Button type="button">
            <Settings className="w-6 h-6" />
          </Button>
      </Link>
    </div>
  )
}

export default HomeSearchBar;