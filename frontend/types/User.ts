import { Roles, User } from "./Auth";

export interface FormUser {
    fullname: string;
    role: Roles;   
    email: string;
};