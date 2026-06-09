import { Box, Typography } from '@mui/material';

export function Header() {
    return (
        <Box component="header" sx={{ py: 2 }}>
            <Typography variant="h6">Header</Typography>
        </Box>
    );
}