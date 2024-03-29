import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { CartDrawer } from "../CartDrawer/CartDrawer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <CartDrawer />
      <div className="p-4 lg:px-32">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
