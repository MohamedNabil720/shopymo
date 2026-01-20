"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DesktopLinks from "./DesktopLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
  ];

  return (
    <div className=" fixed  left-0 right-0 w-full z-50 bg-bg-section ">
      <div className="container mx-auto">
        <NavigationMenu className="flex justify-between items-center max-w-none px-2 md:px-0">
          {/* Logo */}
          <NavigationMenuList>
            <NavigationMenuItem>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="w-32 md:w-36 h-auto"
                loading="eager"
              />
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Desktop Links */}
          <DesktopLinks links={links} pathname={pathname} />

          {/* Icons + Mobile Menu Button */}
          <NavigationMenuList className="flex gap-4 text-white items-center">
            <NavigationMenuItem>
              <Search className="hover:text-primary cursor-pointer w-5 h-5" />
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <Link href="/wishlist">
                <Heart className="hover:text-primary w-5 h-5" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <Link href="/cart">
                <ShoppingCart className="hover:text-primary w-5 h-5" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <User className="hover:text-orange-500 cursor-pointer w-5 h-5" />
            </NavigationMenuItem>

            {/* Menu Icon (Mobile) */}
            <NavigationMenuItem className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="w-6 h-6 text-white hover:text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-white hover:text-primary mt-1.25" />
                )}
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            links={links}
            pathname={pathname}
            closeMenu={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
