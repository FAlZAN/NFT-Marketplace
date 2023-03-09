import React from "react";
import { CATEGORIES } from "../../../assets/index";
import CategoryCard from "../../../components/CategoryCard";

function CategoriesSection() {
  return (
    <section className="my-8 px-8 md:px-12 text-white">
      <h4 className="mb-4 text-3xl lg:text-4xl font-semibold font-worksans">
        Browse Categories
      </h4>

      <div className="my-8  grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {CATEGORIES.map((category, index) => (
          <CategoryCard
            key={index}
            background={category.background}
            icon={category.icon}
            title={category.title}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
