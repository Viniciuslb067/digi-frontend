import { useQuery } from "react-query";

import { getProducts } from "../api";

const useGetProducts = () => {
  return useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });
};

export default useGetProducts;
