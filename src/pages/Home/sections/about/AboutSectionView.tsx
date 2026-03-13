import { Container, AnimatedSection, GlassCard } from '@/components/ui';
import styles from './AboutSectionView.module.css';

const InnovationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const PartnershipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4.5C12 4.5 10.5 3 8 3C5.5 3 3 5 3 8C3 11 5 13.5 12 20C19 13.5 21 11 21 8C21 5 18.5 3 16 3C13.5 3 12 4.5 12 4.5Z" />
    <path d="M12 4.5V12" />
    <path d="M8.5 9L12 12L15.5 9" />
  </svg>
);

const FocusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2V4" />
    <path d="M12 20V22" />
    <path d="M2 12H4" />
    <path d="M20 12H22" />
  </svg>
);

function AboutSectionView() {
  const aboutText =
    'A Verne Tecnologia é uma empresa especializada em soluções de tecnologia para pequenas e médias empresas. Atuamos como parceiro estratégico, oferecendo suporte, desenvolvimento e consultoria em TI, permitindo que sua empresa foque no que realmente importa: crescer.';

  return (
    <section id="sobre" className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <AnimatedSection animation="fadeLeft" className={styles.text}>
            <h2 className={styles.title}>Sobre nós</h2>
            <p className={styles.description}>{aboutText}</p>
          </AnimatedSection>
          <AnimatedSection animation="fadeRight" delay={200} className={styles.features}>
            <GlassCard className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <InnovationIcon />
              </div>
              <h4>Inovação</h4>
              <p>Tecnologias de ponta</p>
            </GlassCard>
            <GlassCard className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <PartnershipIcon />
              </div>
              <h4>Parceria</h4>
              <p>Ao seu lado sempre</p>
            </GlassCard>
            <GlassCard className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FocusIcon />
              </div>
              <h4>Foco</h4>
              <p>Resultados reais</p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export default AboutSectionView;
