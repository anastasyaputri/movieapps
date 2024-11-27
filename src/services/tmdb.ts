import axiosInstance from "./axios";

export const fetchPopularMovies = async (page: number) => {
  const response = await axiosInstance.get("/movie/popular", {
    params: { page },
  });
  return response.data;
};

export const searchMovies = async (query: string) => {
  const response = await axiosInstance.get("/search/movie", {
    params: { query },
  });
  return response.data;
};
