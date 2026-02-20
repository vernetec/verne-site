import { Container } from '@/components/ui';
import portfolioImage from '@/assets/portifolio.png';
import styles from './PortifolioSectionView.module.css';

function PortifolioSectionView() {
  return (
    <section id="portifolio" className={styles.portfolio}>
      <img
        src={portfolioImage}
        alt="Portifólio"
        className={styles.bgImage}
      />
      <Container className={styles.container}>
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>Portfólio</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PortifolioSectionView;
