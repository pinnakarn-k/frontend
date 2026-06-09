import { http } from '../../services/http';
import type { ApiSuccess, ApiSuccessWithPagination } from '../../types/api';
import type {
    HdMasterOption,
    HdSearchItem,
    HdSearchRequest,
    HdSendEmailRequest,
} from './dto';

export function getHdMaster() {
    return http<ApiSuccess<HdMasterOption[]>>('/api/v1/hd/master');
}

export function searchHdDocuments(request: HdSearchRequest) {
    return http<ApiSuccessWithPagination<HdSearchItem>>('/api/v1/hd/search', {
        method: 'POST',
        body: request,
    });
}

export function getHdDocument(documentId: string) {
    return http<ApiSuccess<unknown>>(`/api/v1/hd/documents/${documentId}`);
}

export function downloadHdDocument(documentId: string) {
    return http<ApiSuccess<unknown>>(
        `/api/v1/hd/documents/${documentId}/download`,
        {
            method: 'POST',
        },
    );
}

export function sendHdDocumentsEmail(request: HdSendEmailRequest) {
    return http<ApiSuccess<unknown>>('/api/v1/hd/documents/send-email', {
        method: 'POST',
        body: request,
    });
}