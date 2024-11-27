import React, { useState, useEffect } from "react";
import "./styles/carousal.css";
import image1 from "./carousal-images/1.jpg";
import image2 from "./carousal-images/2.jpg";
import image3 from "./carousal-images/3.jpg";
import image4 from "./carousal-images/4.jpg";

const Carousal = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);



  return (
    <div className="manual-carousel">
      {/* Images */}
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : "hidden"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Carousal;
