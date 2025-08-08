import React, { useState, useEffect } from "react";

export default function LgpdConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lgpd_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("lgpd_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Usamos cookies para melhorar sua experiência, personalizar conteúdo e
        analisar nosso tráfego. Ao continuar, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" style={styles.link}>
          Política de Privacidade
        </a>.
      </p>
      <button onClick={acceptConsent} style={styles.button}>
        Aceitar
      </button>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: "600px",
    width: "90%",
    background: "#1e1e1e",
    color: "#fff",
    padding: "15px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    zIndex: 1000,
    fontFamily: "Arial, sans-serif",
  },
  text: {
    fontSize: "14px",
    margin: 0,
    flex: 1,
    lineHeight: "1.4",
  },
  link: {
    color: "#976285ff",
    textDecoration: "underline",
  },
  button: {
    background: "#4caf50",
    color: "#000",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
};
