import { Category } from "../provider/Transaction";
import { apiUrl } from "./api";
import axiosConfig from "./axiosConfig";

export type CategoriesResponseData = {
  categories: Category[];
};

export const getCategories = (): Promise<Category[]> => {
  return axiosConfig
    .get<CategoriesResponseData>(`${apiUrl}/categories`)
    .then((response) => response.data.categories);
};
