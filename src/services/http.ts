const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

type RequestOptions = {
    method?: string;
    body?: unknown;
    headers?: HeadersInit;
};

export async function http<T>(
    path: string,
    options: RequestOptions = {},
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: options.method ?? 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data as T;
}