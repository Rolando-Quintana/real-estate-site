import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logoContainer}>
          <Link to="/">
            <img src="/images/inveluxlogo.jpg" alt="Logo" style={styles.logo} />
          </Link>
        </div>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/listings" style={styles.link}>Listings</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
        {/* Empty div to balance the layout if you want links centered */}
        <div style={styles.logoContainer}></div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "black",
    padding: "20px 0",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logoContainer: {
    width: "200px", // Adjust based on your logo width
    marginLeft: "20px",
  },
  logo: {
    height: "100px",
    width: "auto",
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