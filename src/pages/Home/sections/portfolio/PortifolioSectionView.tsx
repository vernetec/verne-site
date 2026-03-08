import { Container } from '@/components/ui';
import portfolioImage from '@/assets/portifolio2.png';
import styles from './PortifolioSectionView.module.css';

function PortifolioSectionView() {
  return (
    <section id="portifolio" className={styles.portfolio}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>Portfólio</h2>
          </div>

        <img
          src={portfolioImage}
          alt="Portifólio"
          className={styles.bgImage}
        />
        </div>
      </Container>
    </section>
  );
}

export default PortifolioSectionView;
