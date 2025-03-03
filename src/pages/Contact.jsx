import React from "react";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.subText}>Have questions? Send us a message!</p>
      <ContactForm /> {/* Display the ContactForm component */}
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "black",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subText: {
    fontSize: "18px",
    marginBottom: "20px",
  },
};

export default Contact;
