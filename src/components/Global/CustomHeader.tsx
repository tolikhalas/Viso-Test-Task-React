import CustomDrawer from "./CustomDrawer";

export default function CustomHeader() {
  return (
    <header className="navbar w-full bg-base-100 px-8 py-4 shadow">
      <div className="navbar-start">
        <div>
          <CustomDrawer />
        </div>
      </div>
      <nav className="navbar-center">
        <h2>Logo</h2>
      </nav>
      <div className="navbar-end">Lang</div>
    </header>
  );
}
