// src/components/PrivateRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  
  useEffect(() => {
    
  }, [isLoggedIn, location]);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;