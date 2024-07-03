import "../../styles/errorDisplay.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { clearError } from "../../store/slices/errorSlice";

const ErrorDisplay = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state: RootState) => state.error.message);

  if (!errorMessage) return null;

  return (
    <div className="error-display">
      <p>{errorMessage}</p>
      <button onClick={() => dispatch(clearError())}>Dismiss</button>
    </div>
  );
};

export default ErrorDisplay;
