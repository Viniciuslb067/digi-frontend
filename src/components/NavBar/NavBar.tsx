import { useNavigate } from "react-router-dom";

import { CartButton, MyAccountMenu } from "./components";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky z-50 inset-x-0 top-0 flex items-center justify-between bg-white px-4 py-6 lg:px-32">
      <img
        onClick={() => navigate("/")}
        className="w-20 h-9 lg:w-32 lg:h-14 cursor-pointer"
        src="https://www.digi.ag/hs-fs/hubfs/Horizontal_Vermelho-8.png?width=200&height=94&name=Horizontal_Vermelho-8.png"
      />
      <div className="flex flex-row gap-4">
        <MyAccountMenu />
        <CartButton />
      </div>
    </div>
  );
};
