import { Link } from "react-router-dom";

import { Product } from "@/entities/Product";
import { Button } from "@/components/ui/button";

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="border-b">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center pb-2 lg:p-0">
        <div className="py-4 flex flex-row gap-6 items-center">
          <img className="size-36 object-cover" src={product.image} />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <span className="capitalize text-lg">{product.name}</span>
              <span className="text-gray-400 text-sm font-light">
                Quantidade: <span>{product.quantity}</span>
              </span>
            </div>
            <span>R$ {product.price}</span>
          </div>
        </div>
        <Link to={`/product/${product.slug}`} className="w-full lg:w-auto">
          <Button className="w-full">Ver produto</Button>
        </Link>
      </div>
    </div>
  );
};
