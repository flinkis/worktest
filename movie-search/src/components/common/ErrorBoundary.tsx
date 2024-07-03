import { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { useErrorBoundary } from "../../hooks/useErrorBoundary";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
  const { handleError } = useErrorBoundary();

  return (
    <ReactErrorBoundary
      FallbackComponent={() => <>{fallback}</>}
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
