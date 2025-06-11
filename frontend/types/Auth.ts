export enum Roles {
    CLIENT = "client",
    ADMIN = "admin",
}

export interface User {
    fullname: string;
    email: string;
    password: string;
    role: Roles;   
}

export type SignInForm = Pick<User, 'email' | 'password'>;

export interface SignUpForm extends User {
    confirmPassword: string;
}