import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  if (isLoading) return <div>loading</div>;
  if (error) return <div>Oooooops, {error.message}</div>;
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate replace to="/home" />;
  }
};

export default ProtectedRoute;