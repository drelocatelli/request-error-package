class RequestErrorC extends Error {
    public status: number = 500;
    public message: string = 'Internal Server Error';

    constructor(message?: string, status?: number) {
        super(message);
        this.message = message ?? this.message;
        this.status = status ?? this.status;
    }
}

const RequestError = (message?: string, status?: number) => new RequestErrorC(message, status);

export {RequestError};