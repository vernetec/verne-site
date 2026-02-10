import type { ReactNode } from 'react';
import { cn } from '@/utils';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

export function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={cn(styles.container, className)}>
      {children}
    </Component>
  );
}
