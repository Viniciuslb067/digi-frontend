import axios from "axios";
import { API_URL } from "@/config/constants";

const axiosConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
