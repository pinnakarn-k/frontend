import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';

import '../i18n';
import { store } from '../store';
import { theme } from '../theme/theme';

type AppProvidersProps = {
    children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ReduxProvider>
    );
}