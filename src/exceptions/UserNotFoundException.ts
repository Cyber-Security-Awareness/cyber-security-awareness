import AppException from "./AppExceptions";

export class UserNotFoundException extends AppException {
    constructor(email: string) {
        super(`Can't find user with email: ${email}`)
    }
}
