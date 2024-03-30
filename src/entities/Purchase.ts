import { Product } from "./Product";

export type Purchase = {
  id: number;
  total: number;
  createdAt: string;
  products: Product[];
};
