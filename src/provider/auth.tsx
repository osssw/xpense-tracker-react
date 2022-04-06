import React from "react";
import { login } from "../api/login";
import { getToken, saveToken, removeToken } from "../service/utils";

export const AuthContext = React.createContext<AuthProvider>(
  {} as AuthProvider
);

interface AuthProvider {
  isAuthorized: boolean;
  loginUser: (userData: UserData) => Promise<void>;
  logoutUser: () => void;
}

export type UserData = {
  email: string;
  password: string;
};

const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [isAuthorized, setAuthorized] = React.useState<boolean>(
    Boolean(getToken())
  );

  const loginUser = async (userData: UserData) => {
    const response = await login(userData);
    const data = response.data;
    saveToken(data.session.accessToken);
    setAuthorized(true);
  };

  const logoutUser = () => {
    removeToken();
    setAuthorized(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorized, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
