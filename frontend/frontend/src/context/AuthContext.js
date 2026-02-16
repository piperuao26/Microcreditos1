import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API_URL = "http://127.0.0.1:8000";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ---------- LOGIN ----------
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/api/token/`, {
        email,
        password,
      });

      const token = res.data.access;

      localStorage.setItem("token", token);

      // obtener info del usuario logueado
      const me = await axios.get(`${API_URL}/api/auth/me/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(me.data);
      return true;

    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      return false;
    }
  };

  // ---------- REGISTER ----------
  const register = async (data) => {
    try {
      await axios.post(`${API_URL}/api/auth/register/`, data);
      return true;
    } catch (error) {
      console.error("Register error:", error.response?.data || error);
      return false;
    }
  };

  // ---------- LOGOUT ----------
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // ---------- CHECK SESSION ----------
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.get(`${API_URL}/api/auth/me/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(res.data);
    } catch {
      logout();
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
