import { api } from "./axios";

export const getUsers = () => {
  return api.get("user");
};

export const updateUser = (id: string, data: any) => {
    return api.put(`user/${id}`, data);
};