import { FormUser } from "../types/User";
import { api } from "./axios";

export const getUsers = () => {
  return api.get("user");
};

export const updateUser = (id: string, data: FormUser) => {
    return api.put(`user/${id}`, data);
};