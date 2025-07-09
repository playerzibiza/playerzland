export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Playerz Ibiza</h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
        Villas. Barcos. Tickets. Moda. Una forma de vida.
      </p>
      <a href="https://wa.me/34600000000" target="_blank" style={{
        marginTop: "2rem",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#25D366",
        borderRadius: "8px",
        color: "#000",
        textDecoration: "none",
        fontWeight: "bold"
      }}>
        Escríbenos por WhatsApp
      </a>
    </main>
  );
}
