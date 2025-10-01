import type React from "react";
import { Link } from "react-router";

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6">
      <img className="my-6" src="Illustration.png" alt="" />
      <h2 className="my-2 text-4xl leading-tight text-gray-900">Oops! page not found</h2>
      <p className="my-3 text-gray-500 text-center">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. <br />
        Maecenas sagittis tortor at metus mollis
      </p>
      <Link to="/">
        <button className="bg-primary rounded-[43px] w-[163px] text-[14px] py-3.5 px-8 text-white font-semibold my-3">Back to home</button>
      </Link>
    </div>
  );
};

export default Error404;
