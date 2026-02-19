import React, { ReactNode, ErrorInfo } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro capturado pelo Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
          <div className="max-w-md text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Oops! Algo deu errado</h1>
            <p className="text-foreground/70 mb-8">
              Desculpe-nos pelo incômodo. Um erro inesperado ocorreu. Por favor, tente recarregar a página.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-8 text-left bg-red-500/5 border border-red-500/20 rounded-lg p-4 text-sm">
                <summary className="cursor-pointer font-semibold text-red-600 mb-2">
                  Detalhes do erro (apenas em desenvolvimento)
                </summary>
                <pre className="whitespace-pre-wrap break-words text-red-600/70 overflow-auto max-h-32">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <RefreshCw className="w-5 h-5" />
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
