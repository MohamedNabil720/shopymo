import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";
import { MobileMenuProps } from "./types";

const MobileMenu = ({ links, pathname, closeMenu }: MobileMenuProps) => {
  return (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="md:hidden absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center py-6 space-y-6"
    >
      {/* Links */}
      {links.map((link) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href={link.href}
            className={`text-lg transition ${
              pathname === link.href
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        </motion.div>
      ))}

      {/* Divider */}
      <div className="w-3/4 border-t border-gray-600 my-4"></div>

      {/* Icons row */}
      <motion.div
        className="flex justify-center gap-8 text-white text-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/wishlist" onClick={closeMenu}>
          <Heart className="hover:text-primary w-6 h-6" />
        </Link>
        <Link href="/cart" onClick={closeMenu}>
          <ShoppingCart className="hover:text-primary w-6 h-6" />
        </Link>
        <button onClick={closeMenu}>
          <User className="hover:text-primary w-6 h-6" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
