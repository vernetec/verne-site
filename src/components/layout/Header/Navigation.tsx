import type { NavigationItem } from '@/types';
import { cn } from '@/utils';
import styles from './Navigation.module.css';

interface NavigationProps {
  items: readonly NavigationItem[];
  isOpen: boolean;
  onItemClick: () => void;
}

export function Navigation({ items, isOpen, onItemClick }: NavigationProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#inicio') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onItemClick();
  };

  return (
    <nav className={cn(styles.nav, { [styles.open]: isOpen })}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <a
              href={item.href}
              className={cn(styles.link, { [styles.active]: item.isActive })}
              onClick={(e) => handleLinkClick(e, item.href)}
              {...(item.isExternal && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
