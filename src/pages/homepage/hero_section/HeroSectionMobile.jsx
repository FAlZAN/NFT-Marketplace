import React from "react";
import HighlightedNFT from "../../../components/HighlightedNFT";
import rocket from "../../../assets/rocket.svg";

function HeroSectionMobile() {
  return (
    <section className="hero-section p-8 md:px-12 text-white">
      <div>
        <h4 className="mb-4 text-3xl font-semibold font-worksans">
          Discover Digital Art & Collect NFTs
        </h4>

        <p className="font-worksans">
          NFT marketplace - Collect, buy and sell art from more than 20k NFT
          artists.
        </p>
      </div>

      <HighlightedNFT />

      <div>
        <button className="bg-[#A259FF] w-full md:max-w-xs py-5 font-worksans font-semibold rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center gap-2">
          <img src={rocket} alt="rocket icon" />
          Get Started
        </button>

        <div className="mt-8  flex justify-between">
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
    </section>
  );
}

export default HeroSectionMobile;
