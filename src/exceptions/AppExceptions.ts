class AppException extends Error {
    message: string;
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}

export default AppException;