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

    // Mouse activity state (detect movement vs at rest)
    let lastMoveTime = 0;
    let mouseActivity = 0; // 0 = at rest / idle, 1 = actively moving

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
          // Seed ~15% of dots with dynamic brand colors on interaction
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
            baseColor: '#cbd5e1',
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
      lastMoveTime = performance.now();
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouse.isHovering = false;
      lastMoveTime = 0;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.isHovering = true;
        lastMoveTime = performance.now();
      }
    };

    const handleTouchEnd = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouse.isHovering = false;
      lastMoveTime = 0;
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
    const spring = 0.07;
    const damping = 0.84;
    const repulsionPower = 4.4;

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        const now = performance.now();
        // Mouse is actively moving if an event occurred within 160ms
        const isMoving = mouse.isHovering && (now - lastMoveTime < 160);

        // Smoothly interpolate mouseActivity:
        // Fast rise when moving (0.22), gentle graceful fade when resting (0.055)
        const targetActivity = isMoving ? 1 : 0;
        const activityLerp = isMoving ? 0.22 : 0.055;
        mouseActivity += (targetActivity - mouseActivity) * activityLerp;
        if (mouseActivity < 0.001) mouseActivity = 0;

        // Smooth mouse lerp
        mouse.x += (mouse.targetX - mouse.x) * 0.25;
        mouse.y += (mouse.targetY - mouse.y) * 0.25;

        const isRepelling = mouse.isHovering && mouseActivity > 0.005;

        // Update and draw dots
        const len = dots.length;
        for (let i = 0; i < len; i++) {
          const d = dots[i];

          // Cursor repulsion & active swelling only during active mouse movement
          if (isRepelling) {
            const dx = d.x - mouse.x;
            const dy = d.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 0.1) {
              const force = (1 - dist / mouse.radius) * repulsionPower * mouseActivity;
              const angle = Math.atan2(dy, dx);
              d.vx += Math.cos(angle) * force;
              d.vy += Math.sin(angle) * force;
              // Smooth swelling scaled by motion activity
              const targetActive = (1 - dist / mouse.radius) * mouseActivity;
              d.activeFactor += (targetActive - d.activeFactor) * 0.16;
            } else {
              d.activeFactor += (0 - d.activeFactor) * 0.06;
            }
          } else {
            // Mouse is at rest or outside hero: smooth graceful return to resting state
            d.activeFactor += (0 - d.activeFactor) * 0.06;
          }

          if (d.activeFactor < 0.001) d.activeFactor = 0;

          // Pure spring return to equilibrium (no wave distortion)
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

          if (d.activeFactor > 0.01) {
            ctx.fillStyle = d.activeColor;
            ctx.globalAlpha = 0.38 + d.activeFactor * 0.62;
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
