import React from "react";
import { Outlet, Navigate } from 'react-router-dom';


const ProtectRole = ({ role }) => {
  const userInfo = {
    Name: "Farid",
    role: "admin"
  };

  if (userInfo.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard/unable-access" />;
  }
};




export default ProtectRole;