import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Main Content (Text on the Left) */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Find Your Dream Home</h1>
        <p style={styles.subtext}>
          "Helping families find their dream homes with trust, dedication, and
          expert guidance—your perfect home is just a call away! With years of
          experience in Miami, we know the market inside and out, making buying
          or selling smooth and stress-free. Your goals are our priority; we
          listen, guide, and deliver results. Looking to buy or sell? Contact us
          today!"
        </p>

        {/* Find Your Dream Home Button */}
        <Link to="/listings" style={styles.button}>
          Find Your Dream Home Today!
        </Link>
      </div>

      {/* Realtor Image (On the Right) */}
      <div style={styles.imageContainer}>
        <img
          src="/images/romyinvelux.jpg"
          alt="Realtor"
          style={styles.realtorImage}
        />
      </div>

      {/* Footer with Instagram Link */}
      <footer style={styles.footer}>
        <p>
          Follow us on {" "}
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
        <p>
          © {new Date().getFullYear()} Your Real Estate Business. All rights
          reserved.
        </p>
        <div>
          <Link
            to="/privacy-policy"
            style={styles.link}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            style={styles.link}
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack items vertically on small screens
    minHeight: "150vh", // Increase page length
    padding: "5%", // Use percentages for responsiveness
    backgroundColor: "black",
    color: "white",
    boxSizing: "border-box",
  },
  mainContent: {
    flex: "1",
    textAlign: "left",
    maxWidth: "90%", // Make content responsive
    marginBottom: "40px", // Add spacing to prevent overlap
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 4rem)", // Responsive font size
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtext: {
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)", // Responsive text size
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "1rem 2rem",
    backgroundColor: "#007BFF",
    color: "white",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px", // Ensure space between content and footer
  },
  realtorImage: {
    width: "100%",
    maxWidth: "400px", // Image adapts but doesn't exceed 400px
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  footer: {
    textAlign: "center",
    marginTop: "auto", // Push footer to bottom
    paddingTop: "20px",
  },
  instagramLink: {
    color: "#E1306C",
    textDecoration: "none",
    fontWeight: "bold",
  },
  link: {
    color: "white",
    textDecoration: "underline",
    margin: "0 10px",
  },
};

export default Home;
