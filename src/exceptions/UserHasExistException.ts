import AppException from "./AppExceptions";

export class UserHasExistException extends AppException {
    constructor(email: string) {
        super(`User with email(${email}) has existed in the database.`)
    }
}
