import { useState } from "react";
import API from "../api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await API.post("/auth/register/", { email, password });
    alert("Usuario creado");
    window.location = "/";
  };

  return (
    <div>
      <h2>Registro</h2>
      <input onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Crear</button>
    </div>
  );
}
