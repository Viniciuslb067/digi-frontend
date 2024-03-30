import { useQuery } from "react-query";

import { list } from "../api";

const useGetPurchases = () => {
  return useQuery({
    queryFn: list,
    queryKey: ["purchases"],
  });
};

export default useGetPurchases;
