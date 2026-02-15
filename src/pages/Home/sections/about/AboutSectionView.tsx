import { Container } from '@/components/ui';
import styles from './AboutSectionView.module.css';

function AboutSectionView() {
  const aboutText =
    'A Verne Tecnologia é uma empresa especializada em soluções de tecnologia para pequenas e médias empresas. Atuamos como parceiro estratégico, oferecendo suporte, desenvolvimento e consultoria em TI, permitindo que sua empresa foque no que realmente importa: crescer.';

  return (
    <section id="sobre" className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>Sobre nós</h2>
            <p className={styles.description}>{aboutText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSectionView;
