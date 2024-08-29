import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

const ProtectedRoute = () => {
  const currentUser = getCurrentUser();
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;