import React from "react";
import { login } from "../api/login";
import { saveToken } from "../service/utils";

export const AuthContext = React.createContext<AuthProvider>(
  {} as AuthProvider
);

interface AuthProvider {
  isAuthorized: boolean;
  loginUser: (userData: UserData) => Promise<void>;
}

export type UserData = {
  email: string;
  password: string;
};

const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [isAuthorized, setAuthorized] = React.useState<boolean>(false);

  const loginUser = async (userData: UserData) => {
    const response = await login(userData);
    const data = response.data;
    saveToken(data.session.accessToken);
    setAuthorized(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthorized, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
