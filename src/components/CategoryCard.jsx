import React from "react";

function CategoryCard({ background, icon, title }) {
  return (
    <div className="rounded-lg-2 cursor-pointer hover:scale-95 transition ease-out duration-200">
      <div className="relative">
        <div className="relative">
          <img className="w-full" src={background} alt="background" />

          <div className="rounded-t-3xl backdrop-blur-md  absolute top-0 right-0 bottom-0 left-0"></div>
        </div>

        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={icon}
          alt="icon"
        />
      </div>

      <div className="bg-[#3b3b3b] p-5 font-worksans font-semibold rounded-b-3xl">
        {title}
      </div>
    </div>
  );
}

export default CategoryCard;
