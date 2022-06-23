# Request Error

An Node http custom error with server status.

Basic usage:

throw RequestError(message?: string = Internal Server Error, status?: number = 500);
```
throw RequestError('Error Message', 422);
```