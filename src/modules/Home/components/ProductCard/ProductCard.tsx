import { Link } from "react-router-dom";

import { Product } from "@/entities/Product";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div key={product.slug} className="p-0">
      <Card>
        <CardContent className="flex aspect-square justify-center p-2 lg:p-4">
          <img src={product.image} className="size-full object-cover" />
        </CardContent>
        <CardFooter className="flex w-full flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-lg capitalize">{product.name}</span>
            <span>R${product.price}</span>
          </div>
          <Link to={`/product/${product.slug}`}>
            <Button size="lg" variant="outline" className="border-black">
              Comprar
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
