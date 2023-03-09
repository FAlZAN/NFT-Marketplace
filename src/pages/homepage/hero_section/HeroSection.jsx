import React from "react";
import HighlightedNFT from "../../../components/HighlightedNFT";
import rocket from "../../../assets/rocket.svg";

function HeroSection() {
  return (
    <section className="py-20  lg:px-16 text-white  flex justify-center  md:gap-5">
      <div className="w-2/4 px-8">
        <h4 className="text-4xl lg:text-7xl font-semibold font-worksans">
          Discover Digital Art & Collect Nfts
        </h4>

        <p className="mt-4 mb-8 font-worksans lg:text-2xl">
          NFT marketplace - Collect, buy and sell art from more than 20k NFT
          artists.
        </p>

        <button className="bg-[#A259FF] w-full md:max-w-[224px] h-[60px] px-12 font-worksans font-semibold rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center gap-2">
          <img src={rocket} alt="rocket icon" />
          Get Started
        </button>

        <div className="mt-8  flex justify-between  lg:justify-start lg:gap-x-20">
          <div>
            <h5 className="font-spacemono text-2xl font-bold">240k+</h5>
            <p className="font-worksans">Total Sales</p>
          </div>

          <div>
            <h5 className="font-spacemono text-2xl font-bold">100k+</h5>
            <p className="font-worksans">Auctions</p>
          </div>

          <div>
            <h5 className="font-spacemono text-2xl font-bold">240k+</h5>
            <p className="font-worksans">Artists</p>
          </div>
        </div>
      </div>

      <div className="w-2/4  flex justify-center items-center">
        <HighlightedNFT />
      </div>
    </section>
  );
}

export default HeroSection;
