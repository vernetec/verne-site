import type { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation } from '@/hooks';
import { cn } from '@/utils';
import styles from './AnimatedSection.module.css';

type AnimationType = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'blur';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={cn(
        styles.animated,
        styles[animation],
        { [styles.visible]: isVisible },
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
