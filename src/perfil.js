// src/components/Perfil.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login"); // Redirige si no hay token
      return;
    }

    fetch("http://localhost:5000/perfil", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Token inválido o expirado");
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/registro");
      });
  }, [navigate]);

  if (!userData) return <p>Cargando perfil...</p>;

  return (
    <div className="container mt-5">
      <h2>Bienvenido, {userData.username} 👋</h2>
      <p>ID: {userData._id}</p>
      {/* Puedes agregar más campos del usuario aquí */}
    </div>
  );
}

export default Perfil;
