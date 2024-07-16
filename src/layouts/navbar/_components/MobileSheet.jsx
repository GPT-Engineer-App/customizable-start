import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { NavItem } from "./NavItem";

export const MobileSheet = ({ navItems }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden border-pink-300 text-pink-500">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="bg-pink-50">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-pink-700"
        >
          <Package2 className="h-6 w-6 text-pink-500" />
          <span>Your Pink App</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);