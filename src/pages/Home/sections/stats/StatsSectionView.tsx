import { useScrollAnimation, useCountUp } from '@/hooks';
import { Container, GlassCard, AnimatedSection } from '@/components/ui';
import styles from './StatsSectionView.module.css';

const stats = [
  { value: 150, suffix: '+', label: 'Clientes Satisfeitos' },
  { value: 500, suffix: '+', label: 'Projetos Entregues' },
  { value: 10, suffix: '+', label: 'Anos de Experiência' },
  { value: 99, suffix: '%', label: 'Uptime Garantido' },
];

function StatItem({ value, suffix, label, enabled }: { 
  value: number; 
  suffix: string; 
  label: string; 
  enabled: boolean;
}) {
  const count = useCountUp({ end: value, duration: 2500, enabled });

  return (
    <GlassCard className={styles.statCard} hover={false} glow>
      <div className={styles.statValue}>
        {count}
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </GlassCard>
  );
}

function StatsSectionView() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.stats}>
      <Container>
        <AnimatedSection animation="fadeUp">
          <h2 className={styles.title}>Números que Falam</h2>
          <p className={styles.subtitle}>
            Resultados que comprovam nossa excelência e compromisso
          </p>
        </AnimatedSection>

        <div ref={ref} className={styles.grid}>
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} animation="scaleUp" delay={index * 100}>
              <StatItem {...stat} enabled={isVisible} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsSectionView;
