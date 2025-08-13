import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const canvasRef = useRef(null);
  const position = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      // 부드러운 이동 (inertia)
      position.current.x += (target.current.x - position.current.x) * 0.1;
      position.current.y += (target.current.y - position.current.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = position.current.x;
      const cy = position.current.y;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;

      for (let i = 0; i < 8; i++) {
        const radius = maxRadius * (0.2 + i * 0.1) + Math.sin(time + i) * 5;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        const alpha = 1 - i * 0.1;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      time += 0.03;
      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="about-container">
      <canvas className="background-canvas" ref={canvasRef}></canvas>

      <div className="about-content">
        <h1 className="about-title">ABOUT</h1>
        <p className="about-subtitle">
          We create a narrative that delves into the genesis of all art,
          <br />
          and <span className="highlight">design that story in a unique manner.</span>
        </p>
        <p className="about-korean">
          끊임없는 배움과 성장으로 <br />
          더 나은 개발자가 되기 위해 노력하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
