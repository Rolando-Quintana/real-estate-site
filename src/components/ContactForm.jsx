import { useState } from "react";

function ContactForm() {
  // State to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! We will get back to you soon.");
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

  // ✅ Make sure return is inside the function
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={inputStyle} />
      <button type="submit" style={buttonStyle}>Send</button>
    </form>
  );
}

// ✅ Make sure the export is at the end
export default ContactForm;