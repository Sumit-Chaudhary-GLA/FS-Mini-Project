import React from "react";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();

  // Redirect to the home page after 3 seconds
  React.useEffect(() => {
    const timeout = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [navigate]);

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Order Placed Successfully!</h1>
        <p style={styles.message}>Thank you for your order. You will be redirected to the homepage shortly.</p>
        <button style={styles.button} onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

// Styles for the modern look
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "80%",
    maxWidth: "500px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
  },
  heading: {
    color: "#753370",
    fontSize: "2rem",
    marginBottom: "15px",
  },
  message: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#555",
  },
  button: {
    background: "linear-gradient(135deg, #753370 0%, #298096 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  buttonHover: {
    transform: "scale(1.05)",
  },
};

export default OrderPlaced;
