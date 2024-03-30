import { useCart } from "@/context/CartProvider/CardProvider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { CartItem } from "./components";
import { ScrollArea } from "../ui/scroll-area";

export const CartDrawer = () => {
  const { cart, cartDrawerOpen, setCartDrawerOpen } = useCart();

  const cartIsEmpty = !cart.length;

  const total = cart?.reduce((acc, product) => {
    return acc + +product.price * (product?.quantity || 0);
  }, 0);

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
        {!cartIsEmpty && (
          <SheetFooter className="w-full border-solid border-t border-gray-300">
            <div className="w-full px-6 pb-6 pt-4 flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <span className="font-light">Subtotal</span>
                <span className="font-bold">R$ {total}</span>
              </div>
              <Button className="w-full !m-0 bg-black" autoFocus>
                Finalizar pedido
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
