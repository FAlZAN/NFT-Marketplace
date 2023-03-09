import React from "react";

function InfoCard({ image, title, desc }) {
  return (
    <div className="bg-[#3b3b3b] p-5 font-worksans rounded-lg-2  flex items-center gap-5  md:flex-col">
      <img className="w-24 md:w-40 lg:w-60" src={image} alt="illustration" />

      <div className="flex flex-col gap-2.5 md:flex md:flex-col md:items-center">
        <p className="font-semibold lg:text-xl">{title}</p>
        <p className="text-xs  md:text-center  lg:text-base">{desc}</p>
      </div>
    </div>
  );
}

export default InfoCard;
