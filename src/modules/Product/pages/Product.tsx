import { useParams } from "react-router-dom";
import useGetProductBySlug from "@/services/Product/queries/useGetProductBySlug";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Product = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: response } = useGetProductBySlug({ slug });

  return (
    <div className="p-32">
      <div className="grid grid-cols-[1.25fr_1fr] gap-28">
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
            <Button className="w-full text-md flex-1" size="lg">
              Adicionar ao Carrinho
            </Button>
            <Input
              className="w-16 h-full"
              type="number"
              min="1"
              defaultValue="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
