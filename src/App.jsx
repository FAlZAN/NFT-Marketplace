import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/homepage/HomePage";
import ConnectWalletSection from "./pages/connect_wallet/ConnectWalletSection";
import CreateAccountSection from "./pages/create_account/CreateAccountSection";
import Footer from "./components/Footer";

import Menu from "./components/Menu";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuActive ? "hidden" : "visible";
  }, [isMenuActive]);

  return (
    <BrowserRouter>
      <div className="App bg-primaryBG max-w-screen-2xl  flex flex-col">
        <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wallet" element={<ConnectWalletSection />} />
            <Route path="/createAccount" element={<CreateAccountSection />} />
          </Routes>
        </main>
        <Footer />

        {isMenuActive && <Menu />}
      </div>
    </BrowserRouter>
  );
}

export default App;
