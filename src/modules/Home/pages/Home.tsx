import Slider from "react-slick";

import useGetProducts from "@/services/Home/queries/useGetProducts";
import { NextArrow, PrevArrow } from "@/components/SliderArrows";

import { ProductCard } from "../components";
import { sliderBreakpoints } from "../constants";

const Home = () => {
  const { data: response } = useGetProducts();

  return (
    <div className="flex flex-col gap-12 p-4 lg:p-0">
      <span className="text-2xl lg:text-4xl font-semibold">The Digi Store</span>
      <div className="flex flex-col gap-2">
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
