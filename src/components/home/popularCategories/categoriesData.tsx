import type { ReactNode } from "react";

export const categoriesData: categore[] = [
  {
    title: "Fresh Fruits",
    img: <img src="/home/categories/image 1.svg" alt="fresh-fruits" />,
  },
  {
    title: "Fresh Vegetables",
    img: <img src="/home/categories/image2.svg" alt="Fresh Vegetables" />,
  },
  {
    title: "Meat & Fish",
    img: <img src="/home/categories/meat.svg" alt="Meat & Fish" />,
  },
  {
    title: "Snacks",
    img: <img src="/home/categories/snack.svg" alt="Snacks" />,
  },
  {
    title: "Beverages",
    img: <img src="/home/categories/beverages.svg" alt="Beverages" />,
  },
  {
    title: "Beauty & Health",
    img: <img src="/home/categories/beauty.svg" alt="Beauty & Health" />,
  },
  {
    title: "Bread & Bakery",
    img: <img src="/home/categories/bread.svg" alt="Bread & Bakery" />,
  },
  {
    title: "Baking Needs",
    img: <img src="/home/categories/baking.svg" alt="Baking Needs" />,
  },
  {
    title: "Cooking",
    img: <img src="/home/categories/cook.svg" alt="Cooking" />,
  },
  {
    title: "Diabetic Food",
    img: <img src="/home/categories/diabetic food.svg" alt="Diabetic Food" />,
  },
  {
    title: "Dish Detergents",
    img: (
      <img src="/home/categories/dish detergents.svg" alt="Dish Detergents" />
    ),
  },
  {
    title: "Oil",
    img: <img src="/home/categories/oil.svg" alt="oil" />,
  },
];

interface categore {
  title: string;
  img: ReactNode;
}
