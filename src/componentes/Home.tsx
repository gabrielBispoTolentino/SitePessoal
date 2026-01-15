import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef<number>();
  const delayTimeoutRef = useRef<NodeJS.Timeout>();

  const buttons = [
    { label: 'Blogs', path: '/blogs' },
    { label: 'GitHub', path: '/github' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Contato', path: '/contato' },
    { label: 'Sobre', path: '/about' },
    { label: 'Home', path: '/' },
  ];

  const handleNavigate = (path: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 400);
  };

  const startAutoRotate = () => {
    stopAutoRotate();
    const autoRotate = () => {
      rotationRef.current.y += 0.3;
      setRotationX(rotationRef.current.x);
      setRotationY(rotationRef.current.y);
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
    const handleMouseDown = (e: MouseEvent) => {
      setIsPressed(true);
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
      stopAutoRotate();
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = setTimeout(() => startAutoRotate(), 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isPressed) return;

      const deltaX = e.clientX - prevMouseRef.current.x;
      const deltaY = e.clientY - prevMouseRef.current.y;

      rotationRef.current.x += deltaY * 0.5;
      rotationRef.current.y += deltaX * -0.5;

      setRotationX(rotationRef.current.x);
      setRotationY(rotationRef.current.y);

      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      stopAutoRotate();
    };
  }, [isPressed]); 

  // Iniciar rotação automática ao montar o componente
  useEffect(() => {
    startAutoRotate();
  }, []);

  return (
    <div className="home-container" ref={containerRef}>
      <div className={`cube-container ${isTransitioning ? 'transitioning' : ''}`}>
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          }}
        >
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`cube-face cube-face-${index}`}
              onClick={() => handleNavigate(button.path)}
            >
              {[...Array(16)].map((_, i) => (
                <div key={i} className="cube-square" />
              ))}
              <span className="cube-label">{button.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}