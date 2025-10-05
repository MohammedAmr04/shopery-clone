import { useState } from "react";
import { Dropdown, type MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Location } from "iconsax-react";
import { Link } from "react-router";

function HeaderTop() {
  const [language, setLanguage] = useState("Eng");
  const [currency, setCurrency] = useState("USD");

  const handleChange = (type: "language" | "currency", value: string) => {
    console.log(`${type} selected:`, value);
    if (type === "language") setLanguage(value);
    if (type === "currency") setCurrency(value);
  };

  const languageMenu: MenuProps = {
    items: [
      { key: "Eng", label: "Eng" },
      { key: "Arb", label: "Arb" },
    ],
    onClick: (e) => handleChange("language", e.key as string),
  };

  const currencyMenu: MenuProps = {
    items: [
      { key: "USD", label: "USD" },
      { key: "EURO", label: "EURO" },
    ],
    onClick: (e) => handleChange("currency", e.key as string),
  };

  return (
    <div className="shadow-gray-100 shadow-sm">
      {" "}
      <div className="container py-3 px-3 md:px-0 mx-auto flex text-text justify-between items-center">
        <p className="text-xs flex items-center gap-0.5 font-normal">
          <Location size={15} color="#666666" /> Store Location: Lincoln- 344,
          Illinois, Chicago, USA
        </p>

        <div className="text-xs font-normal flex items-center gap-2">
          <div className="flex gap-3">
            <Dropdown menu={languageMenu} trigger={["click"]}>
              <span className="flex items-center gap-1 cursor-pointer">
                {language} <DownOutlined style={{ fontSize: 10 }} />
              </span>
            </Dropdown>

            <Dropdown menu={currencyMenu} trigger={["click"]}>
              <span className="flex items-center gap-1 cursor-pointer">
                {currency} <DownOutlined style={{ fontSize: 10 }} />
              </span>
            </Dropdown>
          </div>

          <div>
            <span className="px-2 flex gap-1 border-s border-s-light/90">
              <Link to="/login">Sign In</Link>
              <span>/</span>
              <Link to="/sign-up">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
