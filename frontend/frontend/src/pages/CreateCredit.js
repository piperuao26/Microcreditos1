import { useState } from "react";
import api from "../api.js";

export default function CreateCredit() {
  const [email, setEmail] = useState("");
  const [client, setClient] = useState(null);
  const [amount, setAmount] = useState("");

  const search = async () => {
    const res = await api.get(`auth/search/?email=${email}`);
    setClient(res.data[0]);
  };

  const create = async () => {
    await api.post("credits/", {
      client_id: client.id,
      amount,
      term_months: 6,
    });
    alert("Crédito creado");
  };

  return (
<div className="container">
  <h2>Crear Crédito</h2>

  <div className="card">
    <input
      placeholder="Correo del cliente"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button onClick={search}>Buscar</button>

    {client && (
      <>
        <p>Cliente encontrado: {client.email}</p>

        <input
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={create}>Crear Crédito</button>
      </>
    )}
  </div>
</div>

  );
}
