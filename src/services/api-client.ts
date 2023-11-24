import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d1eb1cb11f324d5cac6dd4e5dd3b28ea",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
  }
}

export default APIClient;