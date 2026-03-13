import { APP_CONFIG, COMPANY_INFO } from '@/constants';
import { Button, Container, ParticleBackground, AnimatedSection } from '@/components/ui';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section id="inicio" className={styles.hero}>
      <ParticleBackground particleCount={40} />
      <Container className={styles.container}>
        <AnimatedSection animation="fadeUp" delay={100}>
          <h1 className={styles.title}>{APP_CONFIG.tagline}</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={200}>
          <p className={styles.description}>
            {APP_CONFIG.description} da{' '}
            <strong className={styles.highlight}>{COMPANY_INFO.fullName}</strong>
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={300}>
          <div className={styles.actions}>
            <Button as="a" href="#contato" variant="primary" size="md">
              Comece Agora
              <ArrowIcon />
            </Button>
            <Button as="a" href="#sobre" variant="secondary" size="md">
              Saiba Mais
            </Button>
          </div>
        </AnimatedSection>
      </Container>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Role para baixo</span>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
