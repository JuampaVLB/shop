export enum Roles {
    CLIENT = "client",
    ADMIN = "admin",
}

interface createdAt {
    _seconds: number
}

export interface User {
    fullname: string;
    createdAt?: createdAt;
    email: string;
    password: string;
    role: Roles;   
}

export type SignInForm = Pick<User, 'email' | 'password'>;

export interface SignUpForm extends User {
    confirmPassword: string;
}