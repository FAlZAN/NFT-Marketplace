import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WindowSizeContext } from "../context/WindowSizeContext";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import user from "../assets/user.svg";

function Header({ isMenuActive, setIsMenuActive }) {
  const { windowSize } = useContext(WindowSizeContext);

  function handleMenuClick() {
    setIsMenuActive((prevState) => !prevState);
  }

  return (
    <header className="py-5 px-8 md:px-12  flex justify-between items-center  relative z-50">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <h1 className="pl-4 font-spacemono text-white font-bold text-xl lg:text-xl">
            NFT Marketplace
          </h1>
        </div>
      </Link>

      {windowSize < 769 ? (
        <figure className="cursor-pointer" onClick={handleMenuClick}>
          <img src={isMenuActive ? close : menu} alt="menu" />
        </figure>
      ) : (
        <div>
          <ul className="font-worksans text-white font-semibold  flex justify-center items-center gap-x-2.5">
            <li>
              <p className="px-5 cursor-pointer hover:scale-95 transition ease-out duration-200">
                Marketplace
              </p>
            </li>
            <li>
              <p className="px-5 cursor-pointer hover:scale-95 transition ease-out duration-200">
                Rankings
              </p>
            </li>
            <li>
              <Link to="/wallet">
                <p className="px-5 cursor-pointer hover:scale-95 transition ease-out duration-200">
                  Connect a wallet
                </p>
              </Link>
            </li>
            <li>
              <Link to="/createAccount">
                <button className="bg-[#A259FF] h-[60px] px-[30px] rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center">
                  <img className="mr-3" src={user} alt="user icon" />
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
