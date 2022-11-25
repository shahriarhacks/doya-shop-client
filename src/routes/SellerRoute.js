import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { isSeller, isSellerLoading } = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <DotLoader color="#00FFFF" size={176} />
      </div>
    );
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
