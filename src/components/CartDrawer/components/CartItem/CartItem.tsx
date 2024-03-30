import { Trash } from "lucide-react";

import { useCart } from "@/context/CartProvider/CardProvider";
import { Product } from "@/entities/Product";
import { Input } from "@/components/ui/input";

type CartItemProps = {
  product: Product;
};

export const CartItem = ({ product }: CartItemProps) => {
  const { removeItem, updateItemQuantity } = useCart();

  return (
    <div className="flex flex-row py-4 gap-2 pr-5">
      <img src={product.image} className="size-20 object-cover" />
      <div className="mx-4 flex flex-col">
        <span className="font-semibold capitalize">{product.name}</span>
        <span>R$ {product.price}</span>
      </div>
      <div className="w-full flex flex-col flex-1 items-end justify-between">
        <div
          className="cursor-pointer"
          onClick={() => removeItem(product?.slug)}
        >
          <Trash size={18} />
        </div>
        <Input
          min="1"
          type="number"
          className="w-16"
          value={product.quantity}
          defaultValue={product.quantity}
          onChange={(e) => updateItemQuantity(+e.target.value, product?.slug)}
        />
      </div>
    </div>
  );
};
