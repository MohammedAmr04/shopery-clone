import { useAppDispatch } from "../../../services/store/hooks/hooks";
import { addToWishlist } from "../../../services/store/wishlistSlice/wishlistSlice";
import type { IProduct } from "./productsData";



function ProductComponent({
  title,
  price,
  //   addToCart,
    // favorite,
  img,
  sale,
  id,
}: IProduct) {

  const dispatch = useAppDispatch();
  const handleAddToFav = (id:number) => {
    dispatch(addToWishlist(id))
    
  }
  return (
    <div onClick={()=>handleAddToFav(id)} className="border border-gray-100 duration-300 hover:border-[#2c742f]">
      <div className="w-full p-1.5 h-[230px] flex items-center relative justify-center">
        {img}
        {sale && (
          <p className="bg-danger start-2 top-2  absolute rounded-sm leading-[150%] text-light py-1 px-2 text-sm">
            Sale {sale}%
          </p>
        )}
      </div>
      <div className="content p-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm  text-gray-700 duration-300 hover:text-[#2c742f]">
            {title}
          </h2>
          <p className="text-gray-900 text-base font-medium">
            <span>${price.toFixed(2)}</span>
            {sale && (
              <span className="text-gray-400 line-through ms-1">
                ${((price * 100) / (100 - sale)).toFixed(2)}
              </span>
            )}
          </p>
        </div>
        <span>D</span>
      </div>
    </div>
  );
}

export default ProductComponent;