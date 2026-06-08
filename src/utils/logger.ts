export const logger = {
    info(message: string, data?: unknown) {
        console.info(message, data);
    },

    warn(message: string, data?: unknown) {
        console.warn(message, data);
    },

    error(message: string, error?: unknown) {
        console.error(message, error);
    },
};