import React, { useContext } from "react";
import { WindowSizeContext } from "../context/WindowSizeContext";
import user from "../assets/user.svg";

function Header() {
  const { windowSize } = useContext(WindowSizeContext);

  return (
    <header className="py-5 px-8 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/src/assets/logo.svg" alt="logo" />
        <h1 className="pl-4 font-spacemono text-white font-bold text-xl lg:text-xl">
          NFT Marketplace
        </h1>
      </div>

      {windowSize < 769 ? (
        <div>
          <img src="/src/assets/burger-menu.svg" alt="menu" />
        </div>
      ) : (
        <div>
          <ol className="font-worksans text-white font-semibold  flex justify-center items-center gap-x-2.5">
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
              <p className="px-5 cursor-pointer hover:scale-95 transition ease-out duration-200">
                Connect a wallet
              </p>
            </li>
            <li>
              <button className="bg-[#A259FF] h-[60px] px-[30px] rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center">
                <img className="mr-3" src={user} alt="user icon" />
                Sign Up
              </button>
            </li>
          </ol>
        </div>
      )}
    </header>
  );
}

export default Header;
