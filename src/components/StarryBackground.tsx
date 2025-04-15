
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once and add resize listener
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    const starCount = Math.floor(window.innerWidth * window.innerHeight / 5000);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Make stars twinkle
        star.opacity += (Math.random() - 0.5) * 0.01;
        star.opacity = Math.max(0.2, Math.min(star.opacity, 1));

        // Move stars slightly
        star.y -= star.speed;
        
        // Reset stars that move off the top
        if (star.y < -5) {
          star.y = canvas.height + 5;
          star.x = Math.random() * canvas.width;
        }
      });

      // Random shooting star (rare)
      if (Math.random() < 0.001) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 2),
          length: Math.random() * 100 + 50,
          angle: Math.random() * Math.PI / 4 - Math.PI / 8,
          speed: Math.random() * 10 + 5
        };

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        const endX = shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length;
        const endY = shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length;
        ctx.lineTo(endX, endY);
        
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y, endX, endY
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.8)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-starry-night"
    />
  );
};

export default StarryBackground;
