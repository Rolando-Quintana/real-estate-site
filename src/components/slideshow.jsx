import { useState, useEffect } from "react";
import "../styles.css"; // Ensure the path is correct

const images = [
  "/images/background1.jpg",
  "/images/background2.jpg",
  "/images/background3.jpg",
];

const Slideshow = () => {
  console.log("Slideshow component is rendering"); // ✅ Check if component renders

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      console.log("Current index:", current); // ✅ Check if index updates
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
