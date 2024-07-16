import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { NavItem } from "./NavItem";
import { motion } from "framer-motion";

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

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
        {navItems.map((item, index) => (
          <motion.div
            key={item.to}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <NavItem to={item.to}>
              {item.title}
            </NavItem>
          </motion.div>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);