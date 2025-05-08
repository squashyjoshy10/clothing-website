// src/pages/Home.jsx
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Banner Image */}
      <img
        src="/pernell.png"
        alt="Pernell Banner"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          display: "block"
        }}
      />

      <h1 style={{ textAlign: "center", marginTop: "1.5rem" }}>🏠 Fashion Don Corp!</h1>
      <p style={{ textAlign: "center" }}>
        This is the homepage. Use the tabs above to explore!
      </p>
    </div>
  );
}

