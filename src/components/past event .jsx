import React, { useEffect, useState } from "react";

import img1 from "../assets/caro1.jpeg";
import img2 from "../assets/caro2.jpeg";
import img3 from "../assets/caro5.jpeg";
import img4 from "../assets/caro4.jpeg";
import img5 from "../assets/caro3.jpeg";

const images = [img1, img2, img3, img4, img5];

const PastEventsSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[startIndex % images.length],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
    images[(startIndex + 3) % images.length],
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center fw-bold mb-4 text-primary">
          Past Events
        </h2>

        <div className="row g-4 justify-content-center">
          {visibleImages.map((img, index) => (
            <div className="col-lg-3 col-md-6 col-6" key={index}>
              <img
                src={img}
                alt={`event-${index}`}
                className="img-fluid rounded-4 shadow"
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PastEventsSlider;