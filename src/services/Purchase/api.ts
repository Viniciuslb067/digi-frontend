import axiosInstance from "@/lib/axios";

import { Purchase } from "@/entities/Purchase";
import { ServiceResponse } from "../util/ServiceResponse";

const list = (): Promise<ServiceResponse<Purchase[]>> => {
  return axiosInstance.get("/purchases");
};

const create = (payload: Omit<Purchase, "id" | "createdAt">) => {
  return axiosInstance.post("/purchases", { ...payload });
};

export { create, list };
