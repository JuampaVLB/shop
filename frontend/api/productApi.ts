import { api } from "./axios";

export const getProducts = () => {
    return api.get("product");
};

export const updateProduct = (id: string, data: any) => {
    return api.put(`product/${id}`, data);
};

export const createProduct = (data: any) => {
  return api.post("product", data);
};

export const deleteProduct = (id: string) => {
  return api.delete(`product/${id}`);
};