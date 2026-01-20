import {
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { DesktopLinksProps } from "./types";

const DesktopLinks = ({ links, pathname }: DesktopLinksProps) => {
  return (
    <NavigationMenuList className="hidden md:flex gap-8">
      {links.map((link) => (
        <NavigationMenuItem key={link.href}>
          <Link
            href={link.href}
            className={`transition ${
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-white hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  );
};

export default DesktopLinks;
