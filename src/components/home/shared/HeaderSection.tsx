import { ArrowRight } from "iconsax-reactjs";

function HeaderSection({ title }: { title: string }) {
  return (
    <header className="flex container items-center justify-between mb-8">
      <h5 className="md:text-3xl text-xl font-semibold text-gray-900 leading-[120%]">
        {title}
      </h5>
      <span className="text-primary text-base leading-[150%] flex items-center gap-3 font-medium cursor-pointer">
        <span>View All </span>
        <ArrowRight size={16} />{" "}
      </span>
    </header>
  );
}

export default HeaderSection;
