import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { HealthStatus } from '../features/health/HealthStatus';

export function HomePage() {
    const { t } = useTranslation();

    return (
        <Stack spacing={4}>
            <Typography variant="h4">{t('app.title')}</Typography>
            <HealthStatus />
        </Stack>
    );
}