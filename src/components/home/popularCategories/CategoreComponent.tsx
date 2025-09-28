import type { ReactNode } from "react";

interface IProps {
  title: string;
  img: ReactNode;
}
function CategoreComponent({ title, img }: IProps) {
  return (
    <div className="flex flex-col items-center border border-gray-100 duration-300 hover:border-[#2c742f] text-gray-900 hover:text-[#2c742f] mx-auto pt-4 pb-6 rounded-md  gap-4">
      <div className="w-47.5 h-32.5  flex items-center justify-center">
        {img}
      </div>
      <p className="text-lg leading-[150%]  font-medium">{title}</p>
    </div>
  );
}

export default CategoreComponent;
