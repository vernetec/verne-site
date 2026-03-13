import { useToggle, useScrollLock, useScrollHeader } from '@/hooks';
import { NAVIGATION_CONFIG } from '@/constants';
import { Logo, Button } from '@/components/ui';
import { Navigation } from './Navigation';
import { MobileMenuButton } from './MobileMenuButton';
import { cn } from '@/utils';
import styles from './Header.module.css';

export function Header() {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useToggle();
  const isScrolled = useScrollHeader(50);
  
  useScrollLock(isMenuOpen);

  const { items, ctaButton } = NAVIGATION_CONFIG;

  return (
    <header className={cn(styles.header, { [styles.scrolled]: isScrolled })}>
      <div className={styles.container}>
        <Logo />

        <Navigation 
          items={items} 
          isOpen={isMenuOpen} 
          onItemClick={closeMenu}
        />

        {ctaButton && (
          <Button
            as="a"
            href={ctaButton.href}
            variant="outline"
            size="md"
            className={styles.ctaButton}
          >
            {ctaButton.label}
          </Button>
        )}

        <MobileMenuButton 
          isOpen={isMenuOpen} 
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
}
