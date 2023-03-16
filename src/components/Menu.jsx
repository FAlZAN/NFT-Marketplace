import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import user from "../assets/user.svg";

function Menu() {
  const portal = document.getElementById("portal");

  return (
    <div onClick={(event) => event.stopPropagation()}>
      {ReactDOM.createPortal(
        <div className="bg-black/70 w-full h-screen backdrop-blur overflow-y-hidden  flex justify-center items-center  fixed top-0 left-0 z-10">
          <ul className="w-3/4 h-full pt-[72px] font-worksans text-white font-semibold  flex flex-col justify-center items-center  gap-y-8">
            <li className="w-full text-center">
              <p className="px-5 text-xl cursor-pointer hover:scale-95 transition ease-out duration-200">
                Marketplace
              </p>
            </li>

            <li className="w-full text-center">
              <p className="px-5 text-xl cursor-pointer hover:scale-95 transition ease-out duration-200">
                Rankings
              </p>
            </li>

            <li className="w-full text-center">
              <Link to="/wallet">
                <p className="px-5 text-xl cursor-pointer hover:scale-95 transition ease-out duration-200">
                  Connect a wallet
                </p>
              </Link>
            </li>

            <li className="w-full">
              <Link to="/createAccount">
                <button className="bg-[#A259FF] w-full h-[60px] px-[30px] rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center">
                  <img className="mr-3" src={user} alt="user icon" />
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>,
        portal
      )}
    </div>
  );
}

export default Menu;
