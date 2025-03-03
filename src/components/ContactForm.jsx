import { useState } from "react"; // Removed useRef since it's not needed
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log form data for debugging
    console.log("Submitting form data:", formData);

    emailjs
      .send(
        "service_wtrugaf",    // Your Service ID
        "template_nglcp5t",   // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },                    // Form data object
        "UtCZ-8d4_Ht9XhNxI"   // Your Public Key
      )
      .then(
        (result) => {
          console.log("EmailJS Success Response:", result);
          console.log("Status:", result.status);
          console.log("Text:", result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          console.log("Error Text:", error.text);
          setStatus("Failed to send message: " + error.text);
        }
      );
  };

  // Styles (unchanged)
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
    <form onSubmit={handleSubmit} style={formStyle}> {/* Removed ref={form} */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        style={{ ...inputStyle, minHeight: "100px" }}
      />
      <button type="submit" style={buttonStyle}>
        Send
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default ContactForm;