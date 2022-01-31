import axios from "axios";
import { Category } from "../provider/Transaction";
import { getToken } from "../service/utils";
import { apiUrl } from "./api";

export type CategoriesResponseData = {
  categories: Category[];
};

export const getCategories = () => {
  return axios
    .get<CategoriesResponseData>(`${apiUrl}/categories`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((response) => response.data.categories);
};
