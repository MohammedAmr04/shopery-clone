import { categoriesData } from "./categoriesData";
import CategoreComponent from "./CategoreComponent";
import HeaderSection from "../shared/HeaderSection";

function PopularCategories() {
  return (
    <section className="py-15">
      <HeaderSection title="Popular Categories" />
      <div className="container flex items-center justify-center gap-6 flex-wrap">
        {categoriesData.map((category) => (
          <CategoreComponent
            key={category.title}
            title={category.title}
            img={category.img}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
