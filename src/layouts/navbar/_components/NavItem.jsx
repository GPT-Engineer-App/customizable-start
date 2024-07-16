import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-pink-700"
          : "text-pink-500 hover:text-pink-600",
        className,
      )
    }
  >
    {children}
  </NavLink>
);