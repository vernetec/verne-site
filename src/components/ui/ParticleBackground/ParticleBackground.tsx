import { useEffect, useState } from 'react';
import styles from './ParticleBackground.module.css';

interface ParticleBackgroundProps {
  particleCount?: number;
}

export function ParticleBackground({ particleCount = 50 }: ParticleBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    checkMobile();
    setPrefersReducedMotion(mediaQuery.matches);

    window.addEventListener('resize', checkMobile);
    mediaQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const actualParticleCount = prefersReducedMotion ? 0 : isMobile ? Math.floor(particleCount / 3) : particleCount;

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={styles.container} aria-hidden="true">
      {Array.from({ length: actualParticleCount }).map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--duration': `${15 + Math.random() * 25}s`,
            '--delay': `${Math.random() * 10}s`,
            '--size': `${2 + Math.random() * 4}px`,
            '--opacity': `${0.1 + Math.random() * 0.3}`,
          } as React.CSSProperties}
        />
      ))}n      
      {!isMobile && (
        <>
          <div className={styles.orb} style={{ '--color': '#5BA4C9' } as React.CSSProperties} />
          <div className={styles.orb} style={{ '--color': '#7EC8E3', '--delay': '5s' } as React.CSSProperties} />
          <div className={styles.orb} style={{ '--color': '#2D4A6B', '--delay': '10s' } as React.CSSProperties} />
        </>
      )}
    </div>
  );
}
