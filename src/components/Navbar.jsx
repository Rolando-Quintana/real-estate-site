import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        {/* Logo Placeholder - Replace src with uploaded image */}
        <img src="/invelux-logo.jpg" alt="Logo" style={styles.logo} />
      </div>
      <div style={{ ...styles.navLinks, display: menuOpen ? "flex" : "none" }}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/listings" style={styles.link}>Listings</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
      <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "black",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
  },
  link: {
    fontSize: "24px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  hamburger: {
    fontSize: "30px",
    background: "none",
    color: "white",
    border: "none",
    cursor: "pointer",
    display: "none",
  },
  logoContainer: {
    position: "absolute",
    left: "20px",
  },
  logo: {
    height: "50px",
  },
  '@media (max-width: 768px)': {
    navLinks: {
      flexDirection: "column",
      position: "absolute",
      top: "60px",
      left: "0",
      width: "100%",
      backgroundColor: "black",
      textAlign: "center",
      padding: "20px 0",
    },
    hamburger: {
      display: "block",
    },
  },
};

export default Navbar;
