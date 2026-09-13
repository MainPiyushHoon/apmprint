import React, { useRef, useEffect } from 'react';

/**
 * InteractiveDottedCanvas
 * High-performance HTML5 Canvas particle mesh with cursor repulsion physics
 * and the official APM logo color palette (CMYK/Prismatic gamut).
 */
export default function InteractiveDottedCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // APM Brand Logo Palette
  const brandColors = [
    '#f07101', // Bright Orange
    '#ce5205', // Sunset Orange
    '#3ffb00', // Neon Lime Green
    '#E5097F', // Process Magenta / Pink
    '#008DD2', // Cyan / Process Blue
    '#1D5FAB', // Royal Blue
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Mouse state
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 125,
      isHovering: false,
    };

    let dots = [];
    const spacing = 30; // Grid density

    const initGrid = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x0 = offsetX + c * spacing;
          const y0 = offsetY + r * spacing;
          // Seed ~15% of dots with permanent subtle brand colors
          const isBrandNode = (c * 7 + r * 13) % 7 === 0;
          const brandColor = brandColors[(c + r * 3) % brandColors.length];

          dots.push({
            x0,
            y0,
            x: x0,
            y: y0,
            vx: 0,
            vy: 0,
            radius: isBrandNode ? 2.4 : 1.8,
            baseColor: isBrandNode ? brandColor : '#cbd5e1',
            activeColor: brandColor,
            isBrandNode,
            activeFactor: 0,
          });
        }
      }
    };

    initGrid();

    // Mouse & Touch Listeners attached to hero section
    const interactionTarget = container.closest('.cinematic-hero') || container.parentElement || container;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouse.isHovering = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.isHovering = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouse.isHovering = false;
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initGrid();
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    interactionTarget.addEventListener('mousemove', handleMouseMove);
    interactionTarget.addEventListener('mouseleave', handleMouseLeave);
    interactionTarget.addEventListener('touchmove', handleTouchMove, { passive: true });
    interactionTarget.addEventListener('touchend', handleTouchEnd);

    // Pause rendering when outside viewport
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(interactionTarget);

    // Smooth Physics Animation Loop
    let time = 0;
    const spring = 0.065;
    const damping = 0.85;
    const repulsionPower = 4.4;

    const render = () => {
      if (isVisible) {
        time++;
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse lerp
        mouse.x += (mouse.targetX - mouse.x) * 0.25;
        mouse.y += (mouse.targetY - mouse.y) * 0.25;

        // Update and draw dots (clean particle field without connecting lines)
        const len = dots.length;
        for (let i = 0; i < len; i++) {
          const d = dots[i];

          // Cursor repulsion & active swelling
          if (mouse.isHovering) {
            const dx = d.x - mouse.x;
            const dy = d.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius && dist > 0.1) {
              const force = (1 - dist / mouse.radius) * repulsionPower;
              const angle = Math.atan2(dy, dx);
              d.vx += Math.cos(angle) * force;
              d.vy += Math.sin(angle) * force;
              // Smooth easing into active size
              d.activeFactor += (1 - d.activeFactor) * 0.16;
            } else {
              d.activeFactor += (0 - d.activeFactor) * 0.04;
            }
          } else {
            // Gentle ambient breathing wave
            const waveX = Math.sin(d.x0 * 0.01 + d.y0 * 0.01 + time * 0.02) * 1.2;
            const waveY = Math.cos(d.x0 * 0.01 - d.y0 * 0.01 + time * 0.02) * 1.2;
            d.vx += waveX * 0.04;
            d.vy += waveY * 0.04;
            d.activeFactor += (0 - d.activeFactor) * 0.03;
          }

          // Gentle spring return to equilibrium
          d.vx += (d.x0 - d.x) * spring;
          d.vy += (d.y0 - d.y) * spring;
          d.vx *= damping;
          d.vy *= damping;
          d.x += d.vx;
          d.y += d.vy;

          // Render dot (exact radius increase as original: + 1.4)
          ctx.beginPath();
          const currentRadius = d.radius + d.activeFactor * 1.4;
          ctx.arc(d.x, d.y, currentRadius, 0, Math.PI * 2);

          if (d.activeFactor > 0.02) {
            ctx.fillStyle = d.activeColor;
            ctx.globalAlpha = 0.35 + d.activeFactor * 0.65;
          } else if (d.isBrandNode) {
            ctx.fillStyle = d.baseColor;
            ctx.globalAlpha = 0.45;
          } else {
            ctx.fillStyle = '#cbd5e1';
            ctx.globalAlpha = 0.38;
          }

          ctx.fill();
        }

        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      interactionTarget.removeEventListener('mousemove', handleMouseMove);
      interactionTarget.removeEventListener('mouseleave', handleMouseLeave);
      interactionTarget.removeEventListener('touchmove', handleTouchMove);
      interactionTarget.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="interactive-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="dotted-canvas" />
    </div>
  );
}
