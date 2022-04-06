import axios from "axios";
import { getToken } from "../service/utils";
import { apiUrl } from "./api";

const axiosConfig = axios.create({
  baseURL: apiUrl,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosConfig;
