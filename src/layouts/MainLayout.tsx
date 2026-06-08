import { Box, Container } from '@mui/material';
import type { ReactNode } from 'react';

type MainLayoutProps = {
    children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Container sx={{ py: 4 }}>{children}</Container>
        </Box>
    );
}