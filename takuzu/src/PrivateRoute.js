import { Navigate } from "react-router-dom";
import { useAuth } from "./Pages/Contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/account/login" />;
}