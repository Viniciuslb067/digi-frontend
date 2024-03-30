import Slider from "react-slick";

import useGetProducts from "@/services/Home/queries/useGetProducts";
import { NextArrow, PrevArrow } from "@/components/SliderArrows";

import { ProductCard } from "../components";
import { sliderBreakpoints } from "../constants";

const Home = () => {
  const { data: response } = useGetProducts();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Produtos</h1>
        <h3 className="text-gray-500">Confira nossos produtos em destaque!</h3>
      </div>
      <div className="flex flex-col gap-2 p-4 lg:p-0">
        <Slider
          slidesToShow={3}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          responsive={sliderBreakpoints}
        >
          {response?.data?.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
