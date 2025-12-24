import { useRef } from "react";
import "./InteractiveCard.css";

export default function InteractiveCard({ children, image }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = -(y / rect.height - 0.5) * 20;
    const ry = (x / rect.width - 0.5) * 20;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    card.style.transform = `
      rotateX(${rx}deg)
      rotateY(${ry}deg)
    `;

    card.style.setProperty("--glare-x", `${glareX}%`);
    card.style.setProperty("--glare-y", `${glareY}%`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    card.style.transform = "";
  };

  return (
    <div className="interactive-card-container">
      <div
        ref={cardRef}
        className="interactive-card"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {image ? (
          <img src={image} className="card-base" alt="Interactive card" />
        ) : (
          <div className="card-base card-content">
            {children}
          </div>
        )}

        <div className="interactive-card-fx interactive-card-foil" />
        <div className="interactive-card-fx interactive-card-glare" />
      </div>
    </div>
  );
}
