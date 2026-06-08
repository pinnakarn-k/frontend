export type ApiSuccess<T> = {
    data: T;
};

export type ApiSuccessWithPagination<T> = {
    data: T[];
    meta: {
        pagination: {
            page: number;
            perPage: number;
            total: number;
            totalPages: number;
        };
    };
};

export type ApiFieldError = {
    field: string;
    message: string;
};

export type ApiError = {
    code: string;
    message: string;
};

export type ApiValidationError = {
    code: 'VALIDATION_ERROR';
    message: string;
    errors: ApiFieldError[];
};