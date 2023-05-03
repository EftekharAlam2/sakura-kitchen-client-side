import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "./AuthProviders/Providers";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="w-56">
          <progress className="progress mx-auto"></progress>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
