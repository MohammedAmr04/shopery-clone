import { Button } from "antd";
import { ArrowRight } from "iconsax-reactjs";
import { Link } from "react-router";

function BannarSection() {
  return (
    <section className="py-6 ">
      <div className="container    grid gap-6 grid-cols-1 md:grid-cols-3">
        <div
          className="col-span-1 md:col-span-2 relative flex items-center h-screen overflow-hidden rounded-2xl
                after:content-[''] 
                after:absolute after:inset-0 
                after:bg-gradient-to-br after:from-black/60 after:to-black/0 
                after:z-10"
        >
          <img
            src="/home/bannar/Bannar Big.png"
            alt="Bannar big"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="relative z-20 text-white flex flex-col gap-7 ps-15">
            <h2 className="text-[55px] max-w-md leading-[120%] font-semibold">
              Fresh & Healthy Organic Food
            </h2>
            <div className="ps-3 border-s-[#84D187] border-s-2">
              <p className="text-light text-xl flex items-center font-medium">
                Sale Up to{" "}
                <p className="ms-2 rounded-sm px-3 py-1 bg-warning">
                  30% <span className="ms-1">OFF</span>
                </p>
              </p>
              <p className="text-light/80 text-sm ">
                Free shipping on all your order.
              </p>
            </div>
            <div className="max-w-48 mt-7  ">
              <Button
                size="large"
                iconPosition="end"
                className="!rounded-[52px] w-full  !text-primary "
                icon={<ArrowRight size="16" />}
              >
                Shop now
              </Button>
            </div>{" "}
          </div>
        </div>
        <div className="col-span-1 h-screen flex flex-col gap-6 ">
          <div className="relative min-h-[288px] overflow-hidden rounded-2xl  ">
            <img
              src="/home/bannar/banner small.png"
              className="absolute z-0 w-full h-full"
              alt="Bannar small"
            />{" "}
            <div className="relative z-20 flex flex-col  ps-8 pt-8">
              <p className="uppercase text-sm font-medium text-gray-900">
                Summer Sale
              </p>
              <p className="uppercase text-3xl leading-[120%] mt-2 font-semibold text-gray-900">
                <span>75%</span>
                <span>off</span>
              </p>
              <p className="text-sm text-gray-600 font-normal leading-1.5 mt-3">
                Only Fruit & Vegetable
              </p>
              <Link
                to={"/shop"}
                className="text-primary mt-6 font-semibold text-base leading-[120%]"
              >
                <span>Shop Now</span>
                <ArrowRight size="16" className="inline-block ms-2" />
              </Link>
            </div>
          </div>
          <div
            className="relative  min-h-[288px] overflow-hidden rounded-2xl 
            flex items-center justify-center
            after:content-[''] 
                after:absolute after:inset-0 
                after:bg-[#002603]/80 
                after:z-10"
          >
            <img
              src="/home/bannar/banner small2.png"
              className="absolute z-0 w-full h-full "
              alt="Bannar small"
            />
            <div className="text-light text-center relative z-20">
              <h5 className="uppercase text-sm font-medium">Best Deal</h5>
              <p className="text-3xl font-semibold px-8 leading-[120%] mt-3 mb-8">
                Special Products Deal of the Month
              </p>
              <Link
                to={"/shop"}
                className="text-primary  font-semibold text-base leading-[120%]"
              >
                <span>Shop Now</span>
                <ArrowRight size="16" className="inline-block ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannarSection;
