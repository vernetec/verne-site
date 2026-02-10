import AboutSectionView from "../about-section/AboutSectionView";
import AddressSectionView from "../address-section/AddressSectionView";
import HeroSectionView from "../hero-section/HeroSectionView";
import MissionSectionView from "../mission-section/MissionSectionView";
import ReviewSectionView from "../review-section/ReviewSectionView";
import VisionSectionView from "../vision-section/VisionSectionView";

function HomePageView() {
  return (
    <>
        <HeroSectionView/>
        <AboutSectionView/>
        <MissionSectionView/>
        <VisionSectionView/>
        <ReviewSectionView/>
        <AddressSectionView/>
    </>
  );
}

export default HomePageView;