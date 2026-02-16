import { useEffect, useState } from "react";
import api from "../api.js";

export default function Credits() {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    api.get("credits/").then((res) => setCredits(res.data));
  }, []);

  return (
<div className="container">
  <h2>Mis Créditos</h2>

  {credits.length === 0 && <p>No tienes créditos activos.</p>}

  {credits.map((c) => (
    <div key={c.id} className="card">
      <h3>${c.amount}</h3>
      <p>Plazo: {c.term_months} meses</p>
      <p>Estado: {c.status}</p>
      <p>Creado: {new Date(c.created_at).toLocaleDateString()}</p>
    </div>
  ))}
</div>

  );
}
