import type { ApiErrorResponse, ApiValidationErrorResponse } from '../types/api';

export class ApiError extends Error {
    public readonly status: number;
    public readonly code: string;
    public readonly errors?: ApiValidationErrorResponse['errors'];

    constructor(
        status: number,
        response: ApiErrorResponse | ApiValidationErrorResponse,
    ) {
        super(response.message);

        this.status = status;
        this.code = response.code;

        if ('errors' in response) {
            this.errors = response.errors;
        }
    }
}