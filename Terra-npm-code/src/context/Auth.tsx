import { createContext, useContext, useState, ReactNode } from "react";

interface IAuth {
  token: string | null;
  login: (t: string) => void;
  logout: () => void;
}
const AuthCtx = createContext<IAuth>({} as IAuth);
export const useAuth = () => useContext(AuthCtx);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const login = (t: string) => {
    localStorage.setItem("token", t);
    setToken(t);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return <AuthCtx.Provider value={{ token, login, logout }}>{children}</AuthCtx.Provider>;
};