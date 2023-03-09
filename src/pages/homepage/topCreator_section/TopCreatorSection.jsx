import React, { useContext } from "react";
import { TOP_CREATORS } from "../../../assets/index";
import CreatorCard from "../../../components/CreatorCard";
import rocket from "../../../assets/rocket.svg";

//global context
import { WindowSizeContext } from "../../../context/WindowSizeContext";

function TopCreatorSection() {
  const { windowSize } = useContext(WindowSizeContext);

  return (
    <section className="my-8 px-8 md:px-12 text-white">
      <div className="md:flex md:justify-between">
        <div>
          <h4 className="mb-4 text-3xl lg:text-4xl font-semibold font-worksans">
            Top Creators
          </h4>

          <p className="font-worksans lg:text-2xl">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>

        {windowSize > 639 && (
          <div>
            <button className="max-w-sm h-[60px] px-12 font-worksans font-semibold border-2 border-[#A259FF] rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center gap-2">
              <img src={rocket} alt="rocket icon" /> View Rankings
            </button>
          </div>
        )}
      </div>

      <div className="py-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8">
        {TOP_CREATORS.map((creator, index) => (
          <CreatorCard
            key={index}
            avatar={creator.avatar}
            name={creator.name}
            price={creator.price}
            index={index + 1}
          />
        ))}
      </div>

      <button className="w-full h-[60px] px-12 font-worksans font-semibold border-2 border-[#A259FF] rounded-lg-2 hover:scale-95 transition ease-out duration-200  md:hidden flex justify-center items-center gap-2">
        <img src={rocket} alt="rocket icon" /> View Rankings
      </button>
    </section>
  );
}

export default TopCreatorSection;
