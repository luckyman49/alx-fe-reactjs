import { Navigate } from "react-router-dom";

const isAuthenticated = true; // simulate login

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
