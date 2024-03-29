import axios from "@/lib/axios";

import { Product } from "@/entities/Product";
import { ServiceResponse } from "../util/ServiceResponse";

const getProducts = async (): Promise<ServiceResponse<Product[]>> => {
  return await axios.get("/products");
};

export { getProducts };
