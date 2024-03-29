import axios, { AxiosResponse } from "axios";
import { API_URL } from "@/config/constants";

const axiosConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);

const responseInterceptor = (response: AxiosResponse) => {
  if (response.data) return response.data;
  return response;
};

axiosInstance.interceptors.response.use(responseInterceptor, async (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
