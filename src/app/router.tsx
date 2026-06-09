import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HealthPage } from '../features/health';
import { PreviewPage, SearchPage } from '../features/hd';
import { MainLayout } from '../layouts/MainLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/healthz" replace />,
    },

    {
        path: '/healthz',
        element: (
            <MainLayout>
                <HealthPage />
            </MainLayout>
        ),
    },

    {
        path: '/hd',
        element: (
            <MainLayout>
                <SearchPage />
            </MainLayout>
        ),
    },

    {
        path: '/hd/preview',
        element: (
            <MainLayout>
                <PreviewPage />
            </MainLayout>
        ),
    },
]);