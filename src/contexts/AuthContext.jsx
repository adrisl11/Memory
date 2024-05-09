import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0)
  
  const login = () => {
    setLogged(true);
  };

  const logout = () => {
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, login, logout, puntuacion, setPuntuacion }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
