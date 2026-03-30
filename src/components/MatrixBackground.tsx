import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  
  // Fades in as user scrolls down: 0 opacity at top, 0.08 opacity after 400px scroll
  const opacity = useTransform(scrollY, [0, 400], [0, 0.08]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Code-like characters
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]()<>?:;=+-*/'.split('');
    const fontSize = 14;
    const columns = Math.floor(width / fontSize) + 1;
    // Start drops at random negative Y positions so they don't all fall at once
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);

    let animationFrameId: number;

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#ffffff'; // White text for Vercel vibe
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const yPos = drops[i] * fontSize;
        
        ctx.fillText(text, x, yPos);

        // Reset drop to top randomly after it crosses the screen
        if (yPos > height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.5; // Speed of falling
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
      style={{ opacity }} 
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full blur-[3px]" 
      />
      {/* Gradients to fade out the edges so it blends perfectly with the black background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
    </motion.div>
  );
}
