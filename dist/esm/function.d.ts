declare class RequestErrorC extends Error {
    status: number;
    response: {
        message: string;
    };
    constructor(message?: string, status?: number);
}
declare const RequestError: (message?: string, status?: number) => RequestErrorC;
export { RequestError };
