import { http } from '../../services/http';
import type { ApiSuccess } from '../../types/api';
import type { HealthResponse } from './dto';

export function getHealth() {
    return http<ApiSuccess<HealthResponse>>('/healthz');
}