import { Video } from "iconsax-react";
import BannarSection from "../components/home/bannarSection/BannarSection";
import FeaturedSection from "../components/home/featuredSection/FeaturedSection";
import PopularCategories from "../components/home/popularCategories/PopularCategories";
import PopularProducts from "../components/home/popularProducts/PopularProducts";
import VideoSection from "../components/home/videoSection/VideoSection";

function HomePage() {
  return (
    <div>
      <BannarSection />
      <FeaturedSection />
      <PopularCategories />
      <PopularProducts />
      <VideoSection />
    </div>
  );
}

export default HomePage;
