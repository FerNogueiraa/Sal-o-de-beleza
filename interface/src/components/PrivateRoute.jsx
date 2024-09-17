// src/components/PrivateRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  
  useEffect(() => {
    console.log('PrivateRoute: Verificando autenticação');
    console.log('Token presente:', isLoggedIn);
    console.log('Localização atual:', location.pathname);
  }, [isLoggedIn, location]);

  if (!isLoggedIn) {
    console.log('Redirecionando para login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  console.log('Permitindo acesso à rota privada');
  return <Outlet />;
};

export default PrivateRoute;