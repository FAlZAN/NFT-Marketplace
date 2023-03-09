import React from "react";
import { COMMUNITY_LOGO } from "../assets/index";
import envelope from "../assets/envelope-2.svg";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-[#3b3b3b] py-8 px-8 md:px-12  flex flex-col gap-y-5">
      <div className="py-8 border-b-2 border-[#858584]  flex flex-col lg:flex-row lg:justify-between gap-y-7">
        <div className="text-[#cccccc] font-worksans  flex flex-col gap-y-5">
          <div className="flex gap-x-4">
            <img src={logo} alt="logo" />
            <h5 className="text-white text-2xl font-bold font-spacemono">
              NFT Marketplace
            </h5>
          </div>
          <div>
            <p>NFT marketplace UI created with Anima for Figma.</p>
          </div>
          <div className="flex flex-col gap-y-3.5">
            <p>Join our community</p>
            <ul className="flex gap-2.5">
              <li className="cursor-pointer">
                <img src={COMMUNITY_LOGO[0]} alt="discord icon" />
              </li>
              <li className="cursor-pointer">
                <img src={COMMUNITY_LOGO[1]} alt="instagram icon" />
              </li>
              <li className="cursor-pointer">
                <img src={COMMUNITY_LOGO[2]} alt="twitter icon" />
              </li>
              <li className="cursor-pointer">
                <img src={COMMUNITY_LOGO[3]} alt="youtube icon" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h5 className="text-white text-2xl font-bold font-spacemono">
            Explore
          </h5>

          <ul className="text-[#cccccc] font-worksans  flex flex-col gap-y-5">
            <li>
              <p>Marketplace</p>
            </li>
            <li>
              <p>Rankings</p>
            </li>
            <li>
              <p>Connect a wallet</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-5">
          <div>
            <h5 className="text-white text-2xl font-bold font-spacemono">
              Join Our Weekly Digest
            </h5>
          </div>

          <div className="flex flex-col gap-y-5">
            <p className="text-[#cccccc] font-worksans">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <form className="max-w-md font-worksans text-black caret-black  flex flex-col gap-4  md:bg-white md:rounded-lg-2 md:flex-row md:justify-between md:items-center md:gap-0">
              <div>
                <input
                  className="w-full py-3 px-5 rounded-lg-2 focus:outline-none"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <button
                  className="w-full bg-[#A259FF] text-white font-semibold py-3 px-12 rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center gap-x-3"
                  type="submit"
                >
                  <img className="" src={envelope} alt="envolope icon" />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="text-[#cccccc] font-worksans">
        <p>
          <small>Ⓒ NFT Market.</small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
