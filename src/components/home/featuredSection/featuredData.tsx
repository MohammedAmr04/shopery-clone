import type { ReactNode } from "react";

export const featuredData: feature[] = [
  {
    title: "Free Shipping",
    description: "Free shipping on all your order",
    icon: <img src="/home/featured/delivery-truck.svg" alt="truck" />,
  },
  {
    title: "Customer Support 24/7",
    description: "Instant access to Support",
    icon: <img src="/home/featured/headphones.svg" alt="headphone" />,
  },
  {
    title: "100% Secure Payment",
    description: "We ensure your money is save",
    icon: <img src="/home/featured/shopping-bag.svg" alt="shopping-bag" />,
  },
  {
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
    icon: <img src="/home/featured/package.svg" alt="package" />,
  },
];

interface feature {
  title: string;
  description: string;
  icon: ReactNode;
}
