import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartProvider/CardProvider";

export const CartButton = () => {
  const { cart, setCartDrawerOpen } = useCart();

  return (
    <Button
      size="icon"
      className="bg-transparent hover:bg-transparent"
      onClick={() => setCartDrawerOpen((prev) => !prev)}
    >
      <div className="flex flex-row gap-1 lg:gap-2 justify-center items-center">
        <ShoppingCart color="black" />
        <div className="size-4 lg:size-5 bg-black rounded-md px-1 text-xs lg:text-sm">
          {cart.length}
        </div>
      </div>
    </Button>
  );
};
