import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    const storedUserRole = localStorage.getItem('tipoUsuario');

    if (token && storedUserId && storedUserRole) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
      setUserRole(storedUserRole);
    }
  }, []);

  const login = (token, id, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', id);
    localStorage.setItem('tipoUsuario', role);
    setIsLoggedIn(true);
    setUserId(id);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tipoUsuario');
    setIsLoggedIn(false);
    setUserId(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);