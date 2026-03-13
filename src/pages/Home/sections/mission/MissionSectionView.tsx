import { Container, AnimatedSection } from '@/components/ui';
import missionImage from '@/assets/mission.png';
import styles from './MissionSectionView.module.css';

function MissionSectionView() {
  const missionText =
    'Entregar soluções de tecnologia que aumentem a eficiência, segurança e produtividade de empresas públicas, privadas e órgãos públicos, oferecendo suporte especializado, desenvolvimento sob medida e atendimento humanizado, garantindo estabilidade operacional e sustentando o crescimento dos nossos clientes.';

  return (
    <section id="missao" className={styles.mission}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <AnimatedSection animation="fadeRight" className={styles.text}>
            <h2 className={styles.title}>Missão</h2>
            <p className={styles.description}>{missionText}</p>
          </AnimatedSection>
          <AnimatedSection animation="fadeLeft" delay={200} className={styles.imageWrapper}>
            <img
              src={missionImage}
              alt="Missão da empresa"
              className={styles.image}
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export default MissionSectionView;