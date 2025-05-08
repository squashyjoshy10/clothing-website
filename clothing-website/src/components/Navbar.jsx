// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        onClick={handleToggle}
        style={{
          fontSize: "2rem",
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 1001,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Menu"
      >
        ☰
      </button>

      {/* Overlay Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "#000000ee",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Link
            to="/"
            onClick={closeMenu}
            style={{ fontSize: "3rem", color: "#fff", margin: "1rem", textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            style={{ fontSize: "3rem", color: "#fff", margin: "1rem", textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link
            to="/customizer"
            onClick={closeMenu}
            style={{ fontSize: "3rem", color: "#fff", margin: "1rem", textDecoration: "none" }}
          >
            Customizer
          </Link>
          <Link
            to="/products"
            onClick={closeMenu}
            style={{ fontSize: "3rem", color: "#fff", margin: "1rem", textDecoration: "none" }}
          >
            Products
          </Link>
        </div>
      )}
    </div>
  );
}

