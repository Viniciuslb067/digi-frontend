import { useQuery } from "react-query";

import { getProductBySlug } from "../api";

type UseGetProductBySlugProps = {
  slug?: string;
};

const useGetProductBySlug = ({ slug }: UseGetProductBySlugProps) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => getProductBySlug(slug),
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGetProductBySlug;
