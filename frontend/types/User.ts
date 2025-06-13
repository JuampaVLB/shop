import { Roles } from "./Auth";

export interface FormUser {
    fullname: string;
    role: Roles;   
    id?: string;
};