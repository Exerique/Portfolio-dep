import { useState, useRef } from 'react';
import './topHead.css';
import chiikawa from './chiikawa.jpg';
import BlobClip from './blobclip.jsx';

function TopHead() {
  const heroRef = useRef(null);
  const [glareStyles, setGlareStyles] = useState({
    glareX: 50,
    glareY: 50,
  });

  const handleMouseMove = (e) => {
    const hero = heroRef.current;
    const { left, top, width, height } = hero.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // map cursor for glare movement (0–100)
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;

    setGlareStyles({
      glareX,
      glareY
    });
  };

  const handleMouseLeave = () => {
    setGlareStyles({
      glareX: 50,
      glareY: 50,
    });
  };

  return (
    <div className="tophead-container">
      <div
        ref={heroRef}
        className="curved-section"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <BlobClip />
        <div
          className="hero-glint"
          style={{
            background: `radial-gradient(
              circle at ${glareStyles.glareX}% ${glareStyles.glareY}%,
              rgba(255,255,255,0.6),
              transparent 60%
            )`,
          }}
        />
        <div className="text-content">
          <h1 className="myh">Napat Pankaew</h1>
          <h2 className="myh1">learning/improving developer</h2>
        </div>
        <div className="blob-image">
          <img src={chiikawa} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default TopHead;