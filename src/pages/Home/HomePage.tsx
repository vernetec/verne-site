import { Header, Footer } from '@/components/layout';
import { HeroSection } from './sections/HeroSection';
import styles from './HomePage.module.css';
import AboutSectionView from './sections/about/AboutSectionView';
import ContactSectionView from './sections/contact/ContactSectionView';
import MissionSectionView from './sections/mission/MissionSectionView';
import VisionSectionView from './sections/vision/VisionSectionView';

export function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <AboutSectionView />
        <MissionSectionView />
        <VisionSectionView />
        <ContactSectionView />
      </main>
      <Footer />
    </div>
  );
}
