import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setError } from "../store/slices/errorSlice";

export function useErrorBoundary() {
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();

  const handleError = useCallback(
    (error: Error) => {
      setHasError(true);
      dispatch(setError(error.message));
      console.error("Uncaught error:", error);
    },
    [dispatch]
  );

  return { hasError, handleError };
}
