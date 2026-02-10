import type { NavigationItem } from '@/types';
import { cn } from '@/utils';
import styles from './Navigation.module.css';

interface NavigationProps {
  items: readonly NavigationItem[];
  isOpen: boolean;
  onItemClick: () => void;
}

export function Navigation({ items, isOpen, onItemClick }: NavigationProps) {
  return (
    <nav className={cn(styles.nav, { [styles.open]: isOpen })}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <a
              href={item.href}
              className={cn(styles.link, { [styles.active]: item.isActive })}
              onClick={onItemClick}
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
