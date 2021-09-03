import { UserNotFoundException } from './../exceptions/UserNotFoundException';
import { UserHasExistException } from './../exceptions/UserHasExistException';
import { User, UserRole, UserLoginDto, UserRegisteringDto } from './../models/user';

const fakeUsers: User[] = [
    {
        id: "0",
        email: "admin@test.com",
        password: "123456",
        name: "Admin_1",
        role: UserRole.Admin
    } as User,
    {
        id: "1",
        email: "normal@test.com",
        password: "123456",
        name: "normal_1",
        role: UserRole.Normal
    } as User
];


export const loginUser = async (loginDto: UserLoginDto): Promise<User> => {
    const user = fakeUsers.find((u) => u.email === loginDto.email && u.password === loginDto.password);

    if (!user) {
        throw new UserNotFoundException(loginDto.email);
    }

    return user;

}

export const registerUser = async (registerUser: UserRegisteringDto): Promise<User> => {
    const existUser = fakeUsers.find((u) => u.email === registerUser.email);
    if (existUser) {
        throw new UserHasExistException(registerUser.email);
    }

    fakeUsers.push({
        id: `${parseInt(fakeUsers[-1].id) + 1}`,
        email: registerUser.email,
        password: registerUser.password,
        name: registerUser.email,
        role: UserRole.Normal,
    })

    return loginUser(registerUser as UserLoginDto)
}

