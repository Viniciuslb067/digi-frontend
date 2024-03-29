import axios from "@/lib/axios";

import { Product } from "@/entities/Product";
import { ServiceResponse } from "../util/ServiceResponse";

const getProductBySlug = async (
  slug?: string
): Promise<ServiceResponse<Product>> => {
  return await axios.get(`/products/${slug}`);
};

export { getProductBySlug };
