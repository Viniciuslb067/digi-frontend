import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartProvider/CardProvider";
import { Product as ProductEntity } from "@/entities/Product";
import useGetProductBySlug from "@/services/Product/queries/useGetProductBySlug";

const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: response } = useGetProductBySlug({ slug });

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const handleAddToCart = (product?: ProductEntity) => {
    if (!product) return;

    if (!quantity) {
      toast.error("É necessário adicionar uma quantidade.");
      return;
    }

    addToCart({ ...product, quantity });
    setQuantity(1);

    toast.success("Produto adicionado ao carrinho.");
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-28">
        <div>
          <img
            className="w-full object-cover max-h-96"
            src={response?.data?.image}
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-5xl capitalize">{response?.data?.name}</span>
          <span className="text-lg text-gray-700">
            {response?.data?.detail}
          </span>
          <span className="text-lg">
            {response?.data?.price && `R$ ${response?.data?.price}`}
          </span>
          <div className="w-full flex flex-row gap-2">
            <Button
              className="w-full text-sm lg:text-md flex-1"
              onClick={() => handleAddToCart(response?.data)}
            >
              Adicionar ao Carrinho
            </Button>
            <Input
              min="1"
              type="number"
              defaultValue="1"
              className="w-14 lg:w-16 h-full"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
