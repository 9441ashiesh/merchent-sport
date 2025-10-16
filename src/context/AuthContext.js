import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'owner', 'manager', 'staff', 'admin'
  const [portalType, setPortalType] = useState(null); // 'merchant', 'event', 'coaching', 'admin'
  const [userPortals, setUserPortals] = useState([]); // Array of portals user has access to

  const login = (email, password, role, portal, allPortals = []) => {
    setUser({ email, name: email.split('@')[0] });
    setIsAuthenticated(true);
    setUserRole(role);
    setPortalType(portal);
    // If allPortals not provided, default to single portal
    setUserPortals(allPortals.length > 0 ? allPortals : [{ role, portal }]);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setUserRole(null);
    setPortalType(null);
    setUserPortals([]);
  };

  const switchPortal = (portal, role) => {
    setPortalType(portal);
    setUserRole(role);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        userRole, 
        portalType, 
        userPortals,
        login, 
        logout, 
        switchPortal 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
