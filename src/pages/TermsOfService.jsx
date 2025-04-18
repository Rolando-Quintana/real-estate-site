import React from "react";

const TermsOfService = () => {
  return (
    <div style={styles.container}>
      <h1>Terms of Service</h1>
      <p>By using this website, you agree to the following terms and conditions.</p>
      <h2>1. Use of Website</h2>
      <p>You may use this website for personal and informational purposes only.</p>
      <h2>2. Intellectual Property</h2>
      <p>All content on this site is owned by or licensed to us and may not be copied without permission.</p>
      <h2>3. Disclaimer</h2>
      <p>We do not guarantee the accuracy of listings or real estate information provided on this website.</p>
      <h2>4. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time.</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "white",
    backgroundColor: "black",
    minHeight: "100vh",
  },
};

export default TermsOfService;
