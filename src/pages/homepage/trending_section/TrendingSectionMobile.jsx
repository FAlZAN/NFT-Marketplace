import React from "react";
import CollectionCard from "../../../components/CollectionCard";

function TrendingSectionMobile() {
  return (
    <section className="my-8 px-8 md:px-12 text-white">
      <div>
        <h4 className="mb-4 text-3xl lg:text-4xl font-semibold font-worksans">
          Trending Collection
        </h4>

        <p className="font-worksans lg:text-2xl">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CollectionCard />
      </div>
    </section>
  );
}

export default TrendingSectionMobile;
