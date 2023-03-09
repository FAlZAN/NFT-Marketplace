import React from "react";

function CreatorCard({ avatar, name, price, index }) {
  return (
    <div className="bg-[#3b3b3b] p-5 xl:py-8 2xl:py-14 rounded-lg-2 cursor-pointer hover:scale-95 transition ease-out duration-200  flex lg:flex-col lg:items-center gap-x-5 lg:gap-y-5 relative">
      <div>
        <img className="w-[60px] lg:w-[120px]" src={avatar} alt="avatar" />
        <div className="bg-[#2b2b2b] w-7 h-7 font-spacemono rounded-full  flex justify-center items-center  absolute top-4 left-4">
          {index}
        </div>
      </div>

      <div className="font-worksans lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h5 className="text-2xl font-semibold">{name}</h5>
        <p className="text-[#858584]">
          Total Sales:{" "}
          <span className="text-white font-spacemono">{price} ETH</span>
        </p>
      </div>
    </div>
  );
}

export default CreatorCard;
