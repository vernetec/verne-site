import { Container, AnimatedSection } from '@/components/ui';
import visionImage from '@/assets/vision.png';
import styles from './VisionSectionView.module.css';

function VisionSectionView() {
  const visionText =
    'Personalizamos soluções de tecnologia para atender às necessidades específicas da sua empresa, garantindo eficiência e inovação.';

  return (
    <section id="visao" className={styles.vision}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <AnimatedSection animation="fadeRight" delay={200} className={styles.imageWrapper}>
            <img
              src={visionImage}
              alt="Visão da empresa"
              className={styles.image}
            />
          </AnimatedSection>
          <AnimatedSection animation="fadeLeft" className={styles.text}>
            <h2 className={styles.title}>Visão</h2>
            <p className={styles.description}>{visionText}</p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export default VisionSectionView;