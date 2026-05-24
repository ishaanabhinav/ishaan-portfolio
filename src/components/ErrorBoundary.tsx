import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary captured an error:', error, info);
    }
  }

  handleReset = () => this.setState({ hasError: false, error: undefined });

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          role="alert"
          className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
        >
          <h1 className="text-3xl font-semibold">Something broke unexpectedly</h1>
          <p className="max-w-md text-ink-600 dark:text-ink-300">
            {this.state.error?.message ?? 'An unknown error occurred.'}
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-glow"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
