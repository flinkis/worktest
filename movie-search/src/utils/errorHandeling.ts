import { setError } from "../store/slices/errorSlice";
import { AppDispatch } from "../store";

// Function to handle API errors
export const handleApiError = (error: unknown, dispatch: AppDispatch) => {
  let errorMessage = "An unknown error occurred";

  if (typeof error === "string") {
    errorMessage = error;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "object" && error !== null && "data" in error) {
    // Handle RTK Query error objects
    errorMessage = String(
      (error as any).data?.message || "An API error occurred"
    );
  }

  dispatch(setError(errorMessage));
};

// Function to handle network errors
export const handleNetworkError = (dispatch: AppDispatch) => {
  dispatch(setError("Network error. Please check your internet connection."));
};

// Function to handle timeout errors
export const handleTimeoutError = (dispatch: AppDispatch) => {
  dispatch(setError("Request timed out. Please try again."));
};

// Function to handle validation errors
export interface ValidationError {
  field: string;
  message: string;
}

export const handleValidationErrors = (
  errors: ValidationError[],
  dispatch: AppDispatch
) => {
  const errorMessage = errors
    .map((error) => `${error.field}: ${error.message}`)
    .join("; ");
  dispatch(setError(`Validation error(s): ${errorMessage}`));
};

// Function to handle unexpected errors
export const handleUnexpectedError = (dispatch: AppDispatch) => {
  dispatch(setError("An unexpected error occurred. Please try again later."));
};

// Function to log errors (you might want to send these to a logging service)
export const logError = (error: unknown) => {
  console.error("An error occurred:", error);
  // Here you could add logic to send the error to a logging service
};
