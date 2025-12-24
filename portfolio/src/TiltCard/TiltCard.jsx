import React, { useState, useRef } from "react";
import "./TiltCard.css";

export default function TiltCard({ children, backContent, cornerColor = "#5865f2" }) {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [styles, setStyles] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    glareX: 50,
    glareY: 50,
  });

  const handleMouseMove = (e) => {
    if (isFlipped) return; // Disable tilt when flipped

    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    // tilt strength
    const tiltX = ((y - centerY) / centerY) * 15; // max ~±15°
    const tiltY = ((centerX - x) / centerX) * 15;

    // map cursor for glare movement (0–100)
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;

    setStyles({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      glareX,
      glareY
    });
  };

  const handleMouseLeave = () => {
    if (isFlipped) return;

    setStyles({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      glareX: 50,
      glareY: 50,
    });
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setStyles({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      glareX: 50,
      glareY: 50,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${isFlipped ? 'flipped' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ transform: styles.transform }}
    >
      <div className="tilt-card-inner">
        {/* Front side */}
        <div className="tilt-card-face tilt-card-front">
          <div
            className="tilt-card-glint"
            style={{
              background: `radial-gradient(
                circle at ${styles.glareX}% ${styles.glareY}%,
                rgba(255,255,255,0.6),
                transparent 60%
              )`,
            }}
          />
          <div className="tilt-card-content">
            {children}
          </div>
          {/* Corner fold indicator */}
          <div className="tilt-card-corner" style={{ borderColor: `transparent transparent ${cornerColor} transparent` }}></div>
          <div className="tilt-card-corner-text">click</div>
        </div>

        {/* Back side */}
        <div className="tilt-card-face tilt-card-back">
          <div className="tilt-card-content">
            {backContent || <p>No details available</p>}
          </div>
          {/* Corner fold indicator for back side */}
          <div className="tilt-card-corner" style={{ borderColor: `transparent transparent ${cornerColor} transparent` }}></div>
          <div className="tilt-card-corner-text">back</div>
        </div>
      </div>
    </div>
  );
}
