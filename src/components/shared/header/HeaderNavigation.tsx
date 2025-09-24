import { NavLink } from "react-router";

function HeaderNavigation() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Pages", path: "/pages" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about-us" },
  ];

  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex justify-between">
        <nav className="flex gap-8 text-gray-400">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="text-sm font-medium"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="text-light">(219) 555-0114</div>
      </div>
    </div>
  );
}

export default HeaderNavigation;
