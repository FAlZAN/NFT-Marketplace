import React from "react";
import highlightedNFT from "../assets/highlighted-nft.png";
import avatar from "../assets/sample-highlighted.svg";

function HighlightedNFT() {
  return (
    <div className="w-full md:max-w-xs lg:max-w-md my-8 rounded-2xl">
      <img className="w-full" src={highlightedNFT} alt="highlighted nft" />

      <div className="bg-[#3b3b3b] p-5 text-white font-worksans rounded-b-2xl">
        <h5 className="text-2xl font-semibold">Space Walking</h5>
        <div className="mt-2.5 flex items-center">
          <img src={avatar} alt="avatar" />
          <p className="ml-3">Animakid</p>
        </div>
      </div>
    </div>
  );
}

export default HighlightedNFT;
