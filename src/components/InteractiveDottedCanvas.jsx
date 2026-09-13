import React, { useRef, useEffect } from 'react';

/**
 * InteractiveDottedCanvas
 * High-performance HTML5 Canvas particle mesh with cursor repulsion physics
 * and the official APM logo color palette (CMYK/Prismatic gamut).
 */
export default function InteractiveDottedCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // APM Brand Logo Palette (extracted from apm-logo.svg)
  const brandColors = [
    '#008DD2', // Cyan / Process Blue
    '#1D5FAB', // Royal Blue
    '#E5097F', // Process Magenta / Pink
    '#EF7F1A', // Bright Orange
    '#B0CB1F', // Lime Offset Green
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

    // Mouse & Touch Listeners
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
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
        const rect = container.getBoundingClientRect();
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
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // Pause rendering when outside viewport
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Physics Animation Loop
    let time = 0;
    const spring = 0.08;
    const damping = 0.84;
    const repulsionPower = 4.8;

    const render = () => {
      if (isVisible) {
        time++;
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse lerp
        mouse.x += (mouse.targetX - mouse.x) * 0.35;
        mouse.y += (mouse.targetY - mouse.y) * 0.35;

        // Draw connections for energized dots
        ctx.lineWidth = 1;

        // Update and draw dots
        const len = dots.length;
        for (let i = 0; i < len; i++) {
          const d = dots[i];

          // Cursor repulsion
          if (mouse.isHovering) {
            const dx = d.x - mouse.x;
            const dy = d.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius && dist > 0.1) {
              const force = (1 - dist / mouse.radius) * repulsionPower;
              const angle = Math.atan2(dy, dx);
              d.vx += Math.cos(angle) * force;
              d.vy += Math.sin(angle) * force;
              d.activeFactor = Math.min(1, d.activeFactor + 0.12);
            } else {
              d.activeFactor = Math.max(0, d.activeFactor - 0.03);
            }
          } else {
            // Idle ambient wave
            const waveX = Math.sin(d.x0 * 0.01 + d.y0 * 0.01 + time * 0.02) * 1.5;
            const waveY = Math.cos(d.x0 * 0.01 - d.y0 * 0.01 + time * 0.02) * 1.5;
            d.vx += waveX * 0.05;
            d.vy += waveY * 0.05;
            d.activeFactor = Math.max(0, d.activeFactor - 0.02);
          }

          // Spring return to original position
          d.vx += (d.x0 - d.x) * spring;
          d.vy += (d.y0 - d.y) * spring;
          d.vx *= damping;
          d.vy *= damping;
          d.x += d.vx;
          d.y += d.vy;

          // Render dot
          ctx.beginPath();
          const currentRadius = d.radius + d.activeFactor * 1.4;
          ctx.arc(d.x, d.y, currentRadius, 0, Math.PI * 2);

          if (d.activeFactor > 0.05) {
            ctx.fillStyle = d.activeColor;
            ctx.globalAlpha = 0.3 + d.activeFactor * 0.7;
          } else if (d.isBrandNode) {
            ctx.fillStyle = d.baseColor;
            ctx.globalAlpha = 0.5;
          } else {
            ctx.fillStyle = '#cbd5e1';
            ctx.globalAlpha = 0.45;
          }

          ctx.fill();
        }

        // Draw dynamic filament lines between adjacent active dots
        ctx.globalAlpha = 0.18;
        ctx.strokeStyle = '#008DD2';
        for (let i = 0; i < len; i += 2) {
          const d1 = dots[i];
          if (d1.activeFactor > 0.25) {
            for (let j = i + 1; j < Math.min(i + 5, len); j++) {
              const d2 = dots[j];
              const dist = Math.hypot(d1.x - d2.x, d1.y - d2.y);
              if (dist < spacing * 1.5) {
                ctx.beginPath();
                ctx.moveTo(d1.x, d1.y);
                ctx.lineTo(d2.x, d2.y);
                ctx.stroke();
              }
            }
          }
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
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="interactive-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="dotted-canvas" />
    </div>
  );
}
