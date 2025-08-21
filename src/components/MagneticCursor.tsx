'use client';

import { useEffect, useRef } from 'react';

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    cursorX: 0,
    cursorY: 0,
  });

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    
    // Move the cursor with a magnetic effect
    const updateCursor = () => {
      const { mouseX, mouseY, cursorX, cursorY } = positionRef.current;
      
      // Magnetic effect: cursor follows with a delay
      positionRef.current.cursorX = cursorX + (mouseX - cursorX) * 0.2;
      positionRef.current.cursorY = cursorY + (mouseY - cursorY) * 0.2;
      
      // Update cursor position
      cursor.style.transform = `translate3d(${positionRef.current.cursorX}px, ${positionRef.current.cursorY}px, 0)`;
      
      requestAnimationFrame(updateCursor);
    };

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.mouseX = e.clientX - cursor.offsetWidth / 2;
      positionRef.current.mouseY = e.clientY - cursor.offsetHeight / 2;
    };

    // Hide cursor when not moving
    let timeout: NodeJS.Timeout;
    const handleMouseStop = () => {
      cursor.style.opacity = '100%';
    };

    const handleMouseMoveWithHide = (e: MouseEvent) => {
      cursor.style.opacity = '1';
      clearTimeout(timeout);
      timeout = setTimeout(handleMouseStop, 1000);
      handleMouseMove(e);
    };

    // Initialize cursor position
    positionRef.current = {
      mouseX: window.innerWidth / 2,
      mouseY: window.innerHeight / 2,
      cursorX: window.innerWidth / 2,
      cursorY: window.innerHeight / 2,
    };

    // Start animation
    updateCursor();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMoveWithHide);
    
    // Hide default cursor
    // document.body.style.cursor = 'none';

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveWithHide);
      document.body.style.cursor = 'auto';
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500/30 border-2 border-blue-400 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
      style={{ 
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
      }}
    >
      {/* Inner dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}