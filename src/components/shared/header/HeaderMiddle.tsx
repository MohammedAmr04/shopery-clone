import Search, { type SearchProps } from "antd/es/input/Search";
import { Logo } from "../logo";
import { SearchNormal } from "iconsax-reactjs";
import { Heart, ShoppingBag } from "iconsax-react";

function HeaderMiddle() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="flex py-7 container mx-auto items-center justify-between">
      <Logo />
      <div className="max-w-md px-2 w-full">
        <Search
          placeholder="Search"
          allowClear
          enterButton="Search"
          size="middle"
          prefix={<SearchNormal size={20} color="#666666" />}
          onSearch={onSearch}
        />
      </div>
      <div className="flex items-center gap-4">
        <Heart size="32" color="#1a1a1a" />
        <span className="border-s px-4 flex items-center border-gray-200">
          <ShoppingBag
            size="32"
            color="#1a1a1a"
            className="me-3 !text-gray-900"
          />
          <span className="flex flex-col">
            <span className="text-gray-700 text-xs">Shopping Cart</span>
            <span className="text-gray-900 text-sm font-medium">$57</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default HeaderMiddle;
