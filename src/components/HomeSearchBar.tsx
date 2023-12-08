import { SearchIcon, UserRound } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const HomeSearchBar = () => {
  return (
    <div className="flex relative gap-1">
      <Input className="block" type="text" placeholder="Search..." />
      <Button type="submit">
        <SearchIcon className="w-6 h-6" />
      </Button>
      <Button>
        <UserRound className="w-6 h-6" />
      </Button>
    </div>
  )
}

export default HomeSearchBar;