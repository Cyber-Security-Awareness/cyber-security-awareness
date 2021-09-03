export enum UserRole {
    Normal = "Normal",
    Admin = "Admin",
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface UserRegisteringDto {
    email: string;
    password: string;
}

export interface UserLoginDto {
    email: string;
    password: string;
}

