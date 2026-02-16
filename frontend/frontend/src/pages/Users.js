import { useEffect, useState } from "react";
import api from "../api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("auth/users/")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error cargando usuarios:", err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Usuarios del sistema</h2>

      {users.map((u) => (
        <div
          key={u.id}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <strong>{u.email}</strong>
          <p>Rol: {u.role}</p>
        </div>
      ))}
    </div>
  );
}
