import { Container, AnimatedSection } from '@/components/ui';
import portfolioImage from '@/assets/portifolio2.png';
import styles from './PortifolioSectionView.module.css';

function PortifolioSectionView() {
  return (
    <section id="portifolio" className={styles.portfolio}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <AnimatedSection animation="fadeUp">
            <h2 className={styles.title}>Portfólio</h2>
          </AnimatedSection>

          <AnimatedSection animation="scaleUp" delay={200}>
            <img
              src={portfolioImage}
              alt="Portifólio"
              className={styles.bgImage}
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export default PortifolioSectionView;
