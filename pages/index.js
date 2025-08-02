export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "sans-serif"
    }}>
      <h1>Welcome to IP Logger 👋</h1>
      <p>Visit <code>/api/log</code> to log your IP address and redirect to the login screen.</p>
    </div>
  );
}
