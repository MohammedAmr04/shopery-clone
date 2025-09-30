import HeaderSection from "../shared/HeaderSection";
import ProductComponent from "./ProductComponent";
import { productsData } from "./productsData";

function PopularProducts() {
  return (
    <section className="py-15">
      <HeaderSection title="Popular Products" />
      <div className="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {productsData.map((product) => (
          <ProductComponent
            addToCart={product.addToCart}
            favorite={product.favorite}
            id={product.id}
            key={product.id}
            img={product.img}
            price={product.price}
            rating={product.rating}
            sale={product.sale}
            title={product.title}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
