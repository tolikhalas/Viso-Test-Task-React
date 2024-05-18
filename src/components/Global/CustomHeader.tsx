import CustomDrawer from "./CustomDrawer";
import SwitchLang from "./SwitchLang";

export default function CustomHeader() {
  return (
    <header className="navbar w-full bg-base-100 px-8 py-4 shadow">
      <div className="navbar-start">
        <div>
          <CustomDrawer />
        </div>
      </div>
      <nav className="navbar-center ">
        <img
          src="./src/assets/geo-quest-logo.svg"
          className="h-12 w-12 object-contain"
          alt="Geo Quest Logo"
        />
      </nav>
      <div className="navbar-end">
        <SwitchLang />
      </div>
    </header>
  );
}
