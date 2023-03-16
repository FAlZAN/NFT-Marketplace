import React, { useContext } from "react";
import HeroSectionMobile from "./hero_section/HeroSectionMobile";
import HeroSection from "./hero_section/HeroSection";
import TrendingSectionMobile from "./trending_section/TrendingSectionMobile";
import TopCreatorSection from "./topCreator_section/TopCreatorSection";
import CategoriesSection from "./categories_section/CategoriesSection";
import DiscoverSection from "./discover_section/DiscoverSection";
import HowItWorksSection from "./howItWorks_section/HowItWorksSection";
import SubscriptionSection from "./subscription_section/SubscriptionSection";

//global context
import { WindowSizeContext } from "../../context/WindowSizeContext";

function HomePage() {
  const { windowSize } = useContext(WindowSizeContext);
  console.log(windowSize);

  return (
    <div>
      {windowSize > 767 ? <HeroSection /> : <HeroSectionMobile />}
      <TrendingSectionMobile />
      <TopCreatorSection />
      <CategoriesSection />
      <DiscoverSection />
      <HowItWorksSection />
      <SubscriptionSection />
    </div>
  );
}

export default HomePage;
