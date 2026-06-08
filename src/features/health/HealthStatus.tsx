import { Alert, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { logger } from '../../utils/logger';
import { getHealth } from './service';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function HealthStatus() {
    const [status, setStatus] = useState<Status>('idle');
    const [message, setMessage] = useState<string>('');

    async function checkHealth() {
        logger.info('health check started');

        try {
            setStatus('loading');

            const response = await getHealth();

            setMessage(response.data.status);
            setStatus('success');
        } catch (error) {
            logger.error('health check failed', {
                error,
            });

            setMessage('Unable to connect to backend');
            setStatus('error');
        }
    }

    useEffect(() => {
        let ignore = false;

        async function loadHealth() {
            logger.info('health check started');

            try {
                const response = await getHealth();

                setMessage(response.data.status);
                setStatus('success');
            } catch (error) {
                logger.error('health check failed', {
                    error,
                });

                setMessage('Unable to connect to backend');
                setStatus('error');
            }
        }
        void loadHealth();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <Stack spacing={2}>
            <Typography variant="h6">Backend Health</Typography>

            {status === 'success' && (
                <Alert severity="success">Backend status: {message}</Alert>
            )}

            {status === 'error' && <Alert severity="error">{message}</Alert>}

            <Button
                variant="contained"
                onClick={() => {
                    void checkHealth();
                }}
                disabled={status === 'loading'}
            >
                Check Health
            </Button>
        </Stack>
    );
}