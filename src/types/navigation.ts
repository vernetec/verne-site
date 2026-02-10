export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
}

export interface NavigationConfig {
  items: NavigationItem[];
  ctaButton?: {
    label: string;
    href: string;
  };
}
