import FeaturedComponent from "./FeaturedComponent";
import { featuredData } from "./featuredData";

function FeaturedSection() {
  return (
    <section className=" p-6">
      <div className="flex flex-col md:flex-row  container justify-between  items-center gap-1.5 ">
        {featuredData.map((feature) => (
          <>
            {" "}
            <FeaturedComponent
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;
