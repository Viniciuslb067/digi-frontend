import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";
import { useCart } from "@/context/CartProvider/CardProvider";
import { useCreatePurchase } from "@/services/Purchase/mutations/useCreatePurchase";

export const DrawerFooter = () => {
  const { cart } = useCart();

  const { mutateAsync } = useCreatePurchase();

  const total = cart?.reduce((acc, product) => {
    return acc + +product.price * (product?.quantity || 0);
  }, 0);

  const handleCreatePurchase = async () => {
    await mutateAsync({ products: cart, total });
  };

  return (
    <SheetFooter className="w-full border-solid border-t border-gray-300">
      <div className="w-full px-6 pb-6 pt-4 flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <span className="font-light">Subtotal</span>
          <span className="font-bold">R$ {total}</span>
        </div>
        <Button
          autoFocus
          onClick={handleCreatePurchase}
          className="w-full !m-0 bg-black"
        >
          Finalizar pedido
        </Button>
      </div>
    </SheetFooter>
  );
};
