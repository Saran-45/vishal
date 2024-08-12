// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from './GlobeData';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { userData, isAdmin } = useContext(Context);

  if (!userData) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;