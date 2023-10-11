import React, { useEffect, useRef } from "react";

export default function IntroStars() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    
    if(!canvas) return;
    const context = canvas.getContext("2d");

    let animationFrameId: number;

    const stars: { x: number; y: number; z: number; size: number }[] = [];
    let numStars: number;

    const density = 1500; // lower is more dense 
    const speed = 0.003;
    const maxZ = 100;

    
    function init() {      
      if(!canvas) return;      
      stars.length = 0;
      canvas.width = document.body.clientWidth;  
      numStars = Math.floor((canvas.width * canvas.height) / density);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.floor(Math.random() * maxZ),
          size: .1 + Math.random() * 1.3,
        });
      }
    }


    function update() {

      if(!context || !canvas) return; 

      canvas.width = document.body.clientWidth;  

      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        
        star.y += (speed * star.z)+.005;
        star.x += ((speed * star.z)+.005)/2;
        
        if (star.y < 0) {
          star.y = canvas.height;
        }

        if (star.y > canvas.height) {
          star.y = 0;
        }

        if (star.x < 0) {
          star.x = canvas.width;
        }

        if (star.x > canvas.width) {
          star.x = 0;
        }

        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        
        context.fillStyle = `rgba(255, 255, 255, ${ ((star.z / maxZ)-.3) })`;
        context.fill();
        
      });

      animationFrameId = window.requestAnimationFrame(update);

    }
    
    init();
    update();

    let resizeTimeout: NodeJS.Timeout;

    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 100);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };

  }, []);

  return <canvas ref={canvasRef} className="absolute z-1" height={1500}></canvas>;
}
      
      