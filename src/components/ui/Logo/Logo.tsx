import logoImage from '@/assets/logo.png';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <a href="#" className={styles.logo}>
      <img src={logoImage} alt="Verne Tecnologia" className={styles.image} />
    </a>
  );
}
