import React from "react";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router";
import { CgHome } from "react-icons/cg";

const Breadcrumbpage: React.FC = () => {
  //useLocation: hook to get the current URL pathname
  const location = useLocation();//contains pathname
  //split the pathname into segmants and filter removes empty strings
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  //Array of breadcrumb items
  const breadcrumbItems = [
    {
      //first item is always home link (static)
      title: (
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-primary"
        >
          <CgHome className="text-xl sm:text-2xl text-info leading-none relative top-[-3px]" />
        </Link>
      ),
    },
      //dynamically create breadcrumb items with map method
    ...pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      //check if it's the last item 
      const isLast = index === pathSnippets.length - 1;
      return {
        title: isLast ? (
          <span className="text-primary text-base sm:text-lg md:text-xl font-semibold capitalize">
            {snippet.replace(/-/g, " ")}
          </span>
        ) : (
          <Link
            to={url}
            className="!text-info text-base sm:text-lg md:text-xl font-semibold hover:text-primary capitalize"
          >
            {snippet.replace(/-/g, " ")}
          </Link>
        ),
      };
    }),
  ];

  return (
    <div className="relative w-full h-30 ">
      <img
        src="/images/Breadcumb.jpg"
        alt="Breadcrumb Background"
        className="absolute inset-0 w-full h-full object-cover rotate-180"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/0"></div>
      <div className="relative h-full flex items-center px-4 sm:px-10 md:px-20 lg:px-40 gap-6 sm:gap-12">
        <Breadcrumb
          separator={<RightOutlined className="!text-info text-xs sm:text-sm md:text-base" />}
          items={breadcrumbItems}
        />
      </div>
    </div>
  );
};

export default Breadcrumbpage;
