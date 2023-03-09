import React from "react";
import { GET_STARTED } from "../../../assets/index";
import InfoCard from "../../../components/InfoCard";

function HowItWorksSection() {
  return (
    <section className="my-8 px-8 md:px-12 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="mb-3 text-3xl lg:text-4xl font-semibold font-worksans">
            How It Works
          </h4>

          <p className="font-worksans lg:text-2xl">
            Find out how to get started
          </p>
        </div>
      </div>

      <div className="py-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  lg:gap-x-7">
        {GET_STARTED.map((item, index) => (
          <InfoCard
            key={index}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
