import React from "react";
import { DSGN_ANIMAL_NFT } from "../assets/index";

function CollectionCard() {
  const { avatar, nfts } = DSGN_ANIMAL_NFT;

  return (
    <div className="w-full max-w-sm mx-auto py-8">
      <div className="mb-4 grid grid-cols-3 grid-rows-4 gap-4">
        <img
          className="w-full rounded-lg-2 cursor-pointer hover:scale-95 transition ease-out duration-200  col-start-1 col-end-4 row-start-1 row-end-4"
          src={nfts[0]}
          alt="nft"
        />
        <img
          className="w-full rounded-lg-2 cursor-pointer hover:scale-95 transition ease-out duration-200  col-auto"
          src={nfts[1]}
          alt="nft"
        />
        <img
          className="w-full rounded-lg-2 cursor-pointer hover:scale-95 transition ease-out duration-200  col-auto"
          src={nfts[2]}
          alt="nft"
        />
        <div className="w-full bg-[#A259FF] rounded-lg-2 cursor-pointer hover:scale-95 transition ease-out duration-200  flex justify-center items-center">
          <p className="font-spacemono font-bold">1025+</p>
        </div>
      </div>

      <div className="font-worksans">
        <h5 className="mb-2 text-2xl font-semibold">DSGN Animals</h5>
        <span className="flex items-center gap-2">
          <img src={avatar} alt="avatar" />
          <p>MrFox</p>
        </span>
      </div>
    </div>
  );
}

export default CollectionCard;
