import { useCart } from "@/context/CartProvider/CardProvider";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { CartItem } from "./components";
import { ScrollArea } from "../ui/scroll-area";
import { DrawerFooter } from "./components/DrawerFooter/DrawerFooter";

export const CartDrawer = () => {
  const { cart, cartDrawerOpen, setCartDrawerOpen } = useCart();

  const cartIsEmpty = !cart.length;

  const renderCartContent = () => {
    if (cartIsEmpty) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-lg font-light">Seu carrinho está vazio</span>
        </div>
      );
    }

    return (
      <div className="py-4 pl-6 pr-2">
        <ScrollArea
          style={{
            height: `${!cart.length ? "100%" : "calc(100vh - 226px)"}`,
          }}
        >
          {cart?.map((product) => (
            <CartItem key={product.slug} product={product} />
          ))}
        </ScrollArea>
      </div>
    );
  };

  return (
    <Sheet open={cartDrawerOpen} onOpenChange={setCartDrawerOpen}>
      <SheetContent className="h-full justify-between w-full flex flex-col !p-0">
        <div
          style={{
            height: `${!cartIsEmpty ? "100%" : "calc(100vh - 60px)"}`,
          }}
        >
          <SheetHeader className="w-full border-solid border-b border-gray-300 py-3">
            <SheetTitle className="text-xl pl-6">Meu Carrinho</SheetTitle>
          </SheetHeader>

          {renderCartContent()}
        </div>
        {!cartIsEmpty && <DrawerFooter />}
      </SheetContent>
    </Sheet>
  );
};
