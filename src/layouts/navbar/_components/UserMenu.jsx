import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";

export const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full bg-pink-200 text-pink-700">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="bg-pink-50">
      <DropdownMenuLabel className="text-pink-700">My Account</DropdownMenuLabel>
      <DropdownMenuSeparator className="bg-pink-200" />
      <DropdownMenuItem className="text-pink-600 hover:bg-pink-100">Settings</DropdownMenuItem>
      <DropdownMenuItem className="text-pink-600 hover:bg-pink-100">Support</DropdownMenuItem>
      <DropdownMenuSeparator className="bg-pink-200" />
      <DropdownMenuItem className="text-pink-600 hover:bg-pink-100">Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);