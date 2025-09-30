import type React from "react";

interface IProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
function FeaturedComponent({ title, description, icon }: IProps) {
  return (
    <div className="flex items-center w-full mx-auto max-w-xs my-4 md:my-0 gap-4">
      <div className="size-10 flex items-center justify-center ">{icon}</div>
      <div>
        <h3 className="text-base text-gray-900 font-semibold leading-[120%]">
          {title}
        </h3>
        <p className="text-sm font-normal leading-[150%] text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeaturedComponent;
