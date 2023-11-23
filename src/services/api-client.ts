import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
};

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d1eb1cb11f324d5cac6dd4e5dd3b28ea",
  },
});
