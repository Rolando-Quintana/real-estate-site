import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Main Content (Text on the Left) */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Find Your Dream Home</h1>
        <p style={styles.subtext}>"Helping families find their dream homes with trust, dedication, and expert guidance—your perfect home is just a call away! With years of experience in Miami, we know the market inside and out, making buying or selling smooth and stress-free. Your goals are our priority; we listen, guide, and deliver results. Looking to buy or sell? Contact us today!"</p>

        {/* Find Your Dream Home Button */}
        <Link to="/listings" style={styles.button}>
          Find Your Dream Home Today!
        </Link>
      </div>

      {/* Realtor Image (On the Right) */}
      <img src="/images/romyinvelux.jpg" alt="Realtor" style={styles.realtorImage} />

      {/* Footer with Instagram Link */}
      <footer style={styles.footer}>
        <p>
          Follow us on{" "}
          <a
            href="https://www.instagram.com/invelux.realty/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.instagramLink}
          >
            Instagram
          </a>
        </p>
        <p>Based in Miami, FL</p>
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
    flexDirection: "row", // Align items horizontally
    boxSizing: "border-box",
  },
  mainContent: {
    flex: "1",
    textAlign: "left",
    paddingLeft: "50px",
    maxWidth: "50%", // Limit the width for better readability
  },
  heading: {
    fontSize: "56px", // Increase font size for more impact
    fontWeight: "bold",
    marginBottom: "10px",
    padding:"10px 20px",
    border:"4px solid white",
    display:"inline-block",
  },
  subtext: {
    fontSize: "24px", // Increase size for better legibility
    marginTop: "10px",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "15px 30px",
    backgroundColor: "#007BFF", // Blue background
    color: "white",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3", // Darker blue for hover effect
  },
  realtorImage: {
    width: "400px", // Slightly increase the image size for balance
    borderRadius: "15px", // Increase radius for a smoother look
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Add subtle shadow for depth
    marginRight: "20px",
  },
  footer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    fontSize: "14px", // Smaller footer text
  },
  instagramLink: {
    color: "#E1306C",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Home;

