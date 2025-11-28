import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>KL University Student Portal</h1>

      <nav style={styles.nav}>
        <a style={styles.link} href="#">Home</a>
        <a style={styles.link} href="#">Courses</a>
        <a style={styles.link} href="#">Results</a>
        <a style={styles.link} href="#">Contact</a>
      </nav>

      <p style={styles.text}>
        Welcome to the official KL University Student Portal.
      </p>

      <footer style={styles.footer}>
        © 2025 KL University. All Rights Reserved.
      </footer>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#e8f0ff", // KL Blue Theme
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    color: "#003399",
    borderBottom: "3px solid #000",
    paddingBottom: "10px",
  },
  nav: {
    margin: "20px 0",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
  },
  text: {
    fontSize: "18px",
    marginTop: "20px",
  },
  footer: {
    marginTop: "50px",
    fontSize: "14px",
    color: "#333",
  },
};
