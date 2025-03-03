import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import emailjs from "@emailjs/browser"; // Added EmailJS import

// Initialize EmailJS with your Public Key
emailjs.init("UtCZ-8d4_Ht9XhNxI"); // Using your Public Key from the ContactForm code

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);