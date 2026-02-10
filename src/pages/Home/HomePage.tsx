import { Header } from '@/components/layout';
import { HeroSection } from './sections/HeroSection';
import styles from './HomePage.module.css';
import ContactSectionView from './sections/contact/ContactSectionView';

export function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <ContactSectionView />
      </main>
    </div>
  );
}
