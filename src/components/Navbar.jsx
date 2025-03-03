import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/listings" style={styles.link}>Listings</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "black",
    padding: "20px 0",
    textAlign: "center",
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
};

export default Navbar;