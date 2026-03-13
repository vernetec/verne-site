import type { AnchorHTMLAttributes } from 'react';
import { LOGO_CONFIG } from '@/constants';
import { cn } from '@/utils';
import logoImage from '@/assets/logo.png';
import styles from './Logo.module.css';

interface LogoProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  className?: string;
  src?: string;
  alt?: string;
}

export function Logo({ 
  className, 
  src = logoImage,
  alt = LOGO_CONFIG.alt,
  href = LOGO_CONFIG.href,
  ...anchorProps 
}: LogoProps) {
  return (
    <a 
      href={href} 
      className={cn(styles.logo, className)}
      {...anchorProps}
    >
      <img 
        src={src} 
        alt={alt} 
        className={styles.image}
        loading="eager"
      />
    </a>
  );
}
