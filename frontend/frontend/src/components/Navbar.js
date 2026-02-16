import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <div style={{ fontWeight: 700 }}>MicroCréditos</div>

        {user?.role === "CLIENT" && (
          <Link to="/credits" style={linkStyle}>
            Mis Créditos
          </Link>
        )}
        {user?.role === "ADMIN" && (
            <>
                <Link to="/credits" style={linkStyle}>
                Créditos
                </Link>

                <Link to="/users" style={linkStyle}>
                Usuarios
                </Link>
            </>
            )}


        {user?.role === "MERCHANT" && (
          <>
            <Link to="/credits" style={linkStyle}>
              Mis Créditos
            </Link>

            <Link to="/create-credit" style={linkStyle}>
              Crear Crédito
            </Link>
          </>
        )}
      </div>

      {user && (
        <button
          onClick={logout}
          className="primary-btn"
          style={{ width: "auto", padding: "8px 16px" }}
        >
          Salir
        </button>
      )}
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
};
