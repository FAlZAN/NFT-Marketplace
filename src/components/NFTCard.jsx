import React from "react";

function NFTCard({ nft, title, avatar, user, price, bid }) {
  return (
    <div className="cursor-pointer hover:scale-95 transition ease-out duration-200">
      <div>
        <img className="w-full rounded-t-lg-2" src={nft} alt="nft" />
      </div>

      <div className="bg-[#3b3b3b] p-5 rounded-b-lg-2  flex flex-col gap-y-7">
        <div className="font-worksans  flex flex-col gap-y-2">
          <h5 className="text-2xl font-semibold">{title}</h5>
          <div className="flex gap-x-3">
            <img className="w-6" src={avatar} alt="avatar" />
            <p>{user}</p>
          </div>
        </div>

        <div className="font-spacemono text-sm  flex justify-between">
          <div>
            <p className="text-[#858584]">Price</p>
            <p>{price} ETH</p>
          </div>
          <div>
            <p className="text-[#858584]">Highest Bid</p>
            <p className="text-end">{bid} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
