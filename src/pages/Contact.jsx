import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={styles.input} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={styles.input} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

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
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "#222",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "#333",
    color: "white",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "#333",
    color: "white",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Contact;