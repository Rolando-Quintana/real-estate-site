import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success/Error message
  const form = useRef();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form:", formData); // Check if this logs
    emailjs.sendForm(
      "service_wtrugaf",  // Replace with your EmailJS Service ID
      "template_nglcp5t", // Replace with your EmailJS Template ID
      form.current,
      "yUtCZ-8d4_Ht9XhNxI"   // Replace with your EmailJS Public Key
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    })
    .catch(() => {
      setStatus("Failed to send message. Please try again.");
    });
  };

  // Styles
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <form ref={form} onSubmit={handleSubmit} style={formStyle}>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={inputStyle} />
      <button type="submit" style={buttonStyle}>Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default ContactForm;
