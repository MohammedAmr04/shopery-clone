import type { ReactNode } from "react";

export const productsData: IProduct[] = [
  {
    id: 1,
    title: "Green Apple",
    sale: 15,
    img: <img src="/home/products/Image (2).png" alt="Green Apple" />,
    price: 3.99,
    rating: 4.2,
    addToCart: false,
    favorite: false,
  },
  {
    id: 2,
    title: "Fresh Indian Malta",
    sale: 10,
    img: <img src="/home/products/Image (1).png" alt="Fresh Indian Malta" />,
    price: 5.49,
    rating: 4.6,
    addToCart: false,
    favorite: false,
  },
  {
    id: 3,
    title: "Chinese Cabbage",
    sale: null,
    img: <img src="/home/products/Image.png" alt="Chinese Cabbage" />,
    price: 2.99,
    rating: 4.1,
    addToCart: false,
    favorite: false,
  },
  {
    id: 4,
    title: "Green Lettuce",
    sale: 5,
    img: <img src="/home/products/Image (3).png" alt="Green Lettuce" />,
    price: 1.99,
    rating: 4.4,
    addToCart: false,
    favorite: false,
  },
  {
    id: 5,
    title: "Eggplant",
    sale: 20,
    img: <img src="/home/products/Image (4).png" alt="Eggplant" />,
    price: 4.29,
    rating: 4.3,
    addToCart: false,
    favorite: false,
  },
  {
    id: 6,
    title: "Big Potatoes",
    sale: null,
    img: <img src="/home/products/Image (5).png" alt="Big Potatoes" />,
    price: 3.49,
    rating: 4.0,
    addToCart: false,
    favorite: false,
  },
  {
    id: 7,
    title: "Corn",
    sale: 25,
    img: <img src="/home/products/Image (6).png" alt="Corn" />,
    price: 2.59,
    rating: 4.7,
    addToCart: false,
    favorite: false,
  },
  {
    id: 8,
    title: "Fresh Cauliflower",
    sale: 12,
    img: <img src="/home/products/Image (7).png" alt="Fresh Cauliflower" />,
    price: 3.19,
    rating: 4.5,
    addToCart: false,
    favorite: false,
  },
  {
    id: 9,
    title: "Green Capsicum",
    sale: null,
    img: <img src="/home/products/Image (8).png" alt="Green Capsicum" />,
    price: 2.89,
    rating: 4.1,
    addToCart: false,
    favorite: false,
  },
  {
    id: 10,
    title: "Green Chili",
    sale: 30,
    img: <img src="/home/products/Image (9).png" alt="Green Chili" />,
    price: 1.49,
    rating: 4.6,
    addToCart: false,
    favorite: false,
  },
];

export interface IProduct {
  id: number;
  title: string;
  sale: null | number;
  img: ReactNode;
  price: number;
  rating: number;
  addToCart: boolean;
  favorite: boolean;
}
