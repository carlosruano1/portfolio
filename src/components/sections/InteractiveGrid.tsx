"use client";

import { useEffect, useRef } from "react";

const CELL_SIZE = 20;
const MAX_DISTANCE = 320;
const GLOW_FALLOFF = 1.2;
const AMBIENT = 0.06;

const ACCENT_R = 211;
const ACCENT_G = 175;
const ACCENT_B = 94;

// Base background #111213 – grid lines are this when not hovering
const BASE_R = 17;
const BASE_G = 18;
const BASE_B = 19;

export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const el = containerRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const setSize = () => {
      const { width, height } = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      sizeRef.current = { w: width, h: height };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updateMouse = (e: MouseEvent) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    let rafId = 0;
    const draw = () => {
      const { w, h } = sizeRef.current;
      const cols = Math.ceil(w / CELL_SIZE) || 1;
      const rows = Math.ceil(h / CELL_SIZE) || 1;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        for (let colIndex = 0; colIndex < cols; colIndex++) {
          const cellCenterX = colIndex * CELL_SIZE + CELL_SIZE / 2;
          const cellCenterY = rowIndex * CELL_SIZE + CELL_SIZE / 2;
          const distance = Math.hypot(mx - cellCenterX, my - cellCenterY);
          const t = distance / MAX_DISTANCE;
          const spot = Math.max(0, Math.pow(1 - Math.min(1, t), GLOW_FALLOFF));
          const intensity = Math.min(1, AMBIENT + spot);

          const x = colIndex * CELL_SIZE;
          const y = rowIndex * CELL_SIZE;

          ctx.fillStyle = `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${0.02 + intensity * 0.18})`;
          ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);

          // Grid lines: dark (background) by default, gold on hover
          const r = BASE_R + (ACCENT_R - BASE_R) * intensity;
          const g = BASE_G + (ACCENT_G - BASE_G) * intensity;
          const b = BASE_B + (ACCENT_B - BASE_B) * intensity;
          const lineAlpha = 0.25 + 0.75 * intensity;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
          ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    setSize();
    draw();
    const ro = new ResizeObserver(setSize);
    ro.observe(el);
    window.addEventListener("mousemove", updateMouse);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
