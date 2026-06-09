import { Box, Container } from '@mui/material';
import type { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type MainLayoutProps = {
    children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Header />

            <Container component="main" maxWidth="xl" sx={{ py: 3 }}>
                {children}
            </Container>

            <Footer />
        </Box>
    );
}