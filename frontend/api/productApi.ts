import { FormProduct } from "../types/Product";
import { api } from "./axios";

export const getProducts = () => {
    return api.get("product");
};

export const updateProduct = (id: string, data: FormProduct) => {
    return api.put(`product/${id}`, data);
};

export const createProduct = (data: FormProduct) => {
  return api.post("product", data);
};

export const deleteProduct = (id: string) => {
  return api.delete(`product/${id}`);
};