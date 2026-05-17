import React, { useState } from "react";

import img1 from "../assets/gallery/img1.webp";
import img2 from "../assets/gallery/img2.webp";
import img3 from "../assets/gallery/img3.webp";
import img4 from "../assets/gallery/img4.webp";
import img5 from "../assets/gallery/img5.webp";
import img6 from "../assets/gallery/img6.webp";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  // NEXT
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // PREVIOUS
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // CLOSE
  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  return (
    <div className="gallery-section">
      <h2>Previous Events</h2>
      <p>Clips captured from our past events</p>

      {/* Masonry Grid */}
      <div className="masonry">
        {images.map((img, index) => (
          <div key={index} className="masonry-item">
            <img
              src={img}
              alt=""
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          
          {/* Close Button */}
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>

          {/* Left Arrow */}
          <span className="arrow left" onClick={prevImage}>
            ❮
          </span>

          {/* Image */}
          <img src={images[currentIndex]} alt="" />

          {/* Right Arrow */}
          <span className="arrow right" onClick={nextImage}>
            ❯
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;