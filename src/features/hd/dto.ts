export type HdMasterOption = {
    value: string;
    label: string;
};

export type HdSearchRequest = {
    masterId: string;
    startDate: string;
    endDate: string;
    page: number;
    perPage: number;
};

export type HdSearchItem = {
    id: string;
    detail: string;
    time: string;
};

export type HdSendEmailRequest = {
    documentIds: string[];
};