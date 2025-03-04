import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Logo in the Top Right */}
      <img src="/images/logo.png" alt="Company Logo" style={styles.logo} />

      {/* Main Content (Text on the Left) */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Find Your Dream Home</h1>
        <p style={styles.subtext}>Your perfect home is just a click away.</p>
      </div>

      {/* Realtor Image (On the Right) */}
      <img src="/images/romyinvelux.jpg" alt="Realtor" style={styles.realtorImage} />

      {/* Footer with Instagram Link */}
      <footer style={styles.footer}>
        <p>Follow us on <a href="https://www.instagram.com/invelux.realty/" target="_blank" rel="noopener noreferrer" style={styles.instagramLink}>Instagram</a></p>
      <p>Based in Miami,FL</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between", // Text on left, Image on right
    alignItems: "center",
    height: "100vh",
    padding: "40px",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "120px",
  },
  mainContent: {
    flex: "1",
    textAlign: "left", // Align text to the left
    paddingLeft: "50px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  subtext: {
    fontSize: "20px",
    marginTop: "10px",
  },
  realtorImage: {
    width: "500px",
    borderRadius: "10px",
    marginRight: "50px",
  },
  footer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  instagramLink: {
    color: "#E1306C",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Home;