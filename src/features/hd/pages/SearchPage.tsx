import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function SearchPage() {
    const navigate = useNavigate();

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Historical Data</Typography>

            <Typography>
                Search form, result list, pagination, checkbox, download, and email
                action will be implemented here.
            </Typography>

            <Button
                variant="contained"
                onClick={() => {
                    navigate('/hd/preview');
                }}
            >
                Go to Preview
            </Button>
        </Stack>
    );
}