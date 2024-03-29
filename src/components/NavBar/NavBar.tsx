import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import { useCart } from "@/context/CartProvider/CardProvider";

export const NavBar = () => {
  const navigate = useNavigate();
  const { cart, setCartDrawerOpen } = useCart();

  return (
    <div className="sticky z-50 inset-x-0 top-0 flex items-center justify-between bg-white px-6 py-6 lg:px-32">
      <img
        onClick={() => navigate("/")}
        className="w-32 h-14 cursor-pointer"
        src="https://www.digi.ag/hs-fs/hubfs/Horizontal_Vermelho-8.png?width=200&height=94&name=Horizontal_Vermelho-8.png"
      />
      <Button
        size="icon"
        className="bg-transparent hover:bg-transparent"
        onClick={() => setCartDrawerOpen((prev) => !prev)}
      >
        <div className="flex flex-row gap-3 justify-center items-center">
          <ShoppingCart color="black" />
          <div className="size-5 bg-black rounded-full px-1 text-sm">
            {cart.length}
          </div>
        </div>
      </Button>
    </div>
  );
};
