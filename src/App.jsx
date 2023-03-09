import "./App.css";
import { useContext } from "react";
import Header from "./components/Header";
import HeroSectionMobile from "./pages/homepage/hero_section/HeroSectionMobile";
import HeroSection from "./pages/homepage/hero_section/HeroSection";
import TrendingSectionMobile from "./pages/homepage/trending_section/TrendingSectionMobile";
import TopCreatorSection from "./pages/homepage/topCreator_section/TopCreatorSection";
import CategoriesSection from "./pages/homepage/categories_section/CategoriesSection";
import DiscoverSection from "./pages/homepage/discover_section/DiscoverSection";
import HowItWorksSection from "./pages/homepage/howItWorks_section/HowItWorksSection";
import SubscriptionSection from "./pages/homepage/subscription_section/SubscriptionSection";
import Footer from "./components/Footer";

// import ConnectWalletSection from "./pages/connect_wallet/ConnectWalletSection";
// import CreateAccountSection from "./components/createAccount/CreateAccountSection";
//global context
import { WindowSizeContext } from "./context/WindowSizeContext";

function App() {
  const { windowSize } = useContext(WindowSizeContext);
  console.log(windowSize);

  return (
    <div className="App bg-primaryBG max-w-screen-2xl flex flex-col">
      <Header />
      <main className="flex-1">
        {windowSize > 767 ? <HeroSection /> : <HeroSectionMobile />}
        <TrendingSectionMobile />
        <TopCreatorSection />
        <CategoriesSection />
        <DiscoverSection />
        <HowItWorksSection />
        <SubscriptionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
