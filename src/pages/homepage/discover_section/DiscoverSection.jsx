import React, { useContext } from "react";
import NFTCard from "../../../components/NFTCard";
import { NFTS } from "../../../assets/index";
import eye from "../../../assets/eye.svg";

//global context
import { WindowSizeContext } from "../../../context/WindowSizeContext";

function DiscoverSection() {
  const { windowSize } = useContext(WindowSizeContext);

  return (
    <section className="my-8 px-8 md:px-12 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="mb-3 text-3xl lg:text-4xl font-semibold font-worksans">
            Discover More NFTs
          </h4>

          <p className="font-worksans lg:text-2xl">Explore new trending NFTs</p>
        </div>

        {windowSize > 639 && (
          <div>
            <button className="max-w-sm h-[60px] px-12 font-worksans font-semibold border-2 border-[#A259FF] rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center gap-2">
              <img src={eye} alt="eye icon" /> See All
            </button>
          </div>
        )}
      </div>

      <div className="py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {NFTS.map((nft, index) => (
          <NFTCard
            key={index}
            nft={nft.nft}
            title={nft.title}
            user={nft.user}
            avatar={nft.avatar}
            price={nft.price}
            bid={nft.highestBid}
          />
        ))}
      </div>

      <button className="w-full h-[60px] px-12 font-worksans font-semibold border-2 border-[#A259FF] rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center gap-2  md:hidden">
        <img src={eye} alt="eye icon" /> See All
      </button>
    </section>
  );
}

export default DiscoverSection;
