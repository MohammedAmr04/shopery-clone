import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import HeaderNavigation from "./HeaderNavigation";
import "./style.css";
function HeaderMainLayout() {
  return (
    <header className="header-main-layout">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderNavigation />
    </header>
  );
}

export default HeaderMainLayout;
