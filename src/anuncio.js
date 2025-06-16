
import React from "react";

function Anuncio2() {
  return (
    <div 
      className="anuncio mt-4 mb-4"
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        backgroundColor: "#fff",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        maxWidth: "100%",
        margin: "0 auto"
      }}
    >
      <div style={{ marginBottom: "8px", fontWeight: "bold", color: "#888" }}>
        Publicidad
      </div>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Publicidad de Google"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p style={{ marginTop: "10px" }}>Haz clic para visitar Google</p>
      </a>
      
    </div>
  );
}

export default Anuncio2;
