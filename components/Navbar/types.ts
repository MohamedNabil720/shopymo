export interface NavLink {
  href: string;
  label: string;
}

export interface DesktopLinksProps {
  links: NavLink[];
  pathname: string;
}

export interface MobileMenuProps {
  links: NavLink[];
  pathname: string;
  closeMenu: () => void;
}
