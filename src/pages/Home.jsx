import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Main Content (Text on the Left) */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Find Your Dream Home</h1>
        <p style={styles.subtext}>
        María Romy Jiménez
Founder & Principal Broker, Invelux Realty LLC

With over a decade of experience in Florida’s dynamic real estate market, María Romy Jiménez is a trusted advisor and dedicated advocate for clients navigating complex property transactions. As the founder and principal broker of Invelux Realty LLC, Romy has built a reputation for delivering exceptional results by combining her industry expertise, strategic insights, and client-first approach.

A proud Bolivian-American based in Miami, Florida, Romy’s deep understanding of the region’s real estate landscape allows her to serve a diverse clientele, including sellers, buyers, investors, property owners, and tenants. Her extensive experience spans residential, commercial, and investment properties, positioning her as a versatile leader in the industry.

Romy earned her degree in Business Administration in 2010, equipping her with the strategic acumen to excel in negotiations and deliver data-driven insights. Her background in the legal field and previous collaborations with real estate professionals have strengthened her ability to manage transactions with precision and ensure seamless closings.

Driven by her entrepreneurial spirit, Romy founded Invelux Realty LLC to provide clients with personalized guidance and tailored solutions. Her mission is clear: to empower clients with the knowledge and resources they need to make informed decisions. Romy takes pride in understanding each client’s unique goals and developing customized strategies to help them achieve optimal outcomes.

Whether working with first-time homebuyers, seasoned investors, or international clients, Romy’s commitment to transparency, communication, and professional integrity ensures her clients feel supported at every step.

For those seeking a knowledgeable and results-driven partner in Florida’s real estate market, María Romy Jiménez and her team at Invelux Realty LLC deliver a service experience defined by expertise, dedication, and success.
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
