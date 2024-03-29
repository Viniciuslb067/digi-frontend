import { Button } from "@/components/ui/button";

import useGetProducts from "@/services/Home/queries/useGetProducts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const { data: response } = useGetProducts();

  return (
    <div className="px-16 py-8">
      <div className="flex flex-col gap-8">
        <span className="text-7xl">The Digi Store</span>
        <div className="flex flex-col gap-2">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {response?.data?.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent
                        className={`flex aspect-square justify-center p-6`}
                      >
                        <img
                          className="size-full object-cover"
                          src={product.image}
                        />
                      </CardContent>
                      <CardFooter className="flex w-full flex-col justify-center items-center gap-4">
                        <div className="flex flex-col gap-2 items-center">
                          <span className="text-lg capitalize">
                            {product.name}
                          </span>
                          <span>R${product.price}</span>
                        </div>
                        <Button>Comprar este produto</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
