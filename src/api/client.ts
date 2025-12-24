import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

const client = axios.create({
  baseURL: "http://localhost:9916",
});

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

export default client;
