import { Component, type ErrorInfo, type ReactNode } from 'react';

import { logger } from '../../utils/logger';

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return {
            hasError: true,
        };
    }

    override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logger.error('react error boundary', {
            error,
            errorInfo,
        });
    }

    override render() {
        if (this.state.hasError) {
            return <div>Unexpected error occurred.</div>;
        }

        return this.props.children;
    }
}