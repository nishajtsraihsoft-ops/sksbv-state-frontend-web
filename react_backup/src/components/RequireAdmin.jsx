import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const RequireAdmin = ({ children }) => {
  const { user, token } = useAuth();
  if (!user && !token) {
    // not logged in
    return <Navigate to="/admin/login" replace />;
  }

  // If backend supplies role, enforce it. Otherwise allow if a token exists.
  if (user && user.role && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RequireAdmin;
