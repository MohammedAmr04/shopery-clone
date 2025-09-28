import BannarSection from "../components/home/bannarSection/BannarSection";
import FeaturedSection from "../components/home/featuredSection/FeaturedSection";
import PopularCategories from "../components/home/popularCategories/PopularCategories";

function HomePage() {
  return (
    <div>
      <BannarSection />
      <FeaturedSection />
      <PopularCategories />
    </div>
  );
}

export default HomePage;
