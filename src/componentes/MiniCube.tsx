import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './MiniCube.css';

export default function MiniCube() {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef<number>();

  const startAutoRotate = () => {
    const autoRotate = () => {
      rotationRef.current.y += 0.5;
      setRotation({ ...rotationRef.current });
      autoRotateRef.current = requestAnimationFrame(autoRotate);
    };
    autoRotateRef.current = requestAnimationFrame(autoRotate);
  };

  const stopAutoRotate = () => {
    if (autoRotateRef.current) {
      cancelAnimationFrame(autoRotateRef.current);
    }
  };

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, []);

  return (
    <div
      className="mini-cube-container"
      onClick={() => navigate('/')}
      title="Voltar para Home"
    >
      <div
        className="mini-cube"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="mini-cube-arrow">←</div>
        {[0, 1, 2, 3, 4, 5].map((face) => (
          <div key={face} className={`mini-cube-face face-${face}`} />
        ))}
      </div>
    </div>
  );
}
