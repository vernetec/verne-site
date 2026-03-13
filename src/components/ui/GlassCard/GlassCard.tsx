import { cn } from '@/utils';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        styles.card,
        { [styles.hover]: hover, [styles.glow]: glow },
        className
      )}
    >
      {children}
    </div>
  );
}
