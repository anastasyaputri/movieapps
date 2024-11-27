import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: "d1bbf4b6c69ba7773498c7718cce5816",
  };
  return config;
});

export default axiosInstance;
