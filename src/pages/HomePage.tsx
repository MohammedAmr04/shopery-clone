import BannarSection from "../components/home/bannarSection/BannarSection";
import FeaturedSection from "../components/home/featuredSection/FeaturedSection";
import PopularCategories from "../components/home/popularCategories/PopularCategories";
import PopularProducts from "../components/home/popularProducts/PopularProducts";

function HomePage() {
  return (
    <div>
      <BannarSection />
      <FeaturedSection />
      <PopularCategories />
      <PopularProducts />
    </div>
  );
}

export default HomePage;
