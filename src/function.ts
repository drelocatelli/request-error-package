class RequestErrorC extends Error {
    public status: number = 500;
    public response: {message: string} = {
        message: 'Internal Server Error'
    };

    constructor(message?: string, status?: number) {
        super(message);
        this.response.message = message ?? this.response.message;
        this.status = status ?? this.status;
    }
}

const RequestError = (message?: string, status?: number) => new RequestErrorC(message, status);

export {RequestError};