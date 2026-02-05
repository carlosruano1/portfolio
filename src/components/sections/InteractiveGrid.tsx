"use client";

import { useEffect, useRef, useState } from "react";

const CELL_SIZE = 20;
const MAX_DISTANCE = 320; // larger = glow reaches farther
const GLOW_FALLOFF = 1.2; // lower = softer, more diffused falloff
const AMBIENT = 0.06; // subtle base glow so it feels more spread/diffused

// Accent #D3AF5E
const ACCENT_R = 211;
const ACCENT_G = 175;
const ACCENT_B = 94;

function buildEmptyGrid(cols: number, rows: number): number[][] {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));
}

export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });
  const cols = Math.ceil(size.w / CELL_SIZE) || 1;
  const rows = Math.ceil(size.h / CELL_SIZE) || 1;
  const [gridOpacity, setGridOpacity] = useState<number[][]>(() =>
    buildEmptyGrid(cols, rows)
  );

  // Resize: grid fills viewport so glow works everywhere
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateSize = () => {
      const { width, height } = el.getBoundingClientRect();
      setSize({ w: width, h: height });
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Rebuild grid when cols/rows change
  useEffect(() => {
    setGridOpacity(buildEmptyGrid(cols, rows));
  }, [cols, rows]);

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePosRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    const animate = () => {
      setGridOpacity((prev) => {
        const newOpacity = prev.map((row, rowIndex) =>
          row.map((_, colIndex) => {
            const cellCenterX = colIndex * CELL_SIZE + CELL_SIZE / 2;
            const cellCenterY = rowIndex * CELL_SIZE + CELL_SIZE / 2;

            const distance = Math.sqrt(
              Math.pow(mousePosRef.current.x - cellCenterX, 2) +
                Math.pow(mousePosRef.current.y - cellCenterY, 2)
            );

            const t = distance / MAX_DISTANCE;
            const spot = Math.max(
              0,
              Math.pow(1 - Math.min(1, t), GLOW_FALLOFF)
            );
            return Math.min(1, AMBIENT + spot);
          })
        );
        return newOpacity;
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMousePos);
    animate();

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
      }}
    >
      <div className="absolute inset-0">
        {gridOpacity.map((row, rowIndex) =>
          row.map((intensity, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="absolute border transition-opacity duration-150"
              style={{
                left: colIndex * CELL_SIZE,
                top: rowIndex * CELL_SIZE,
                width: CELL_SIZE,
                height: CELL_SIZE,
                opacity: intensity,
                borderColor: `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${0.2 + intensity * 0.6})`,
                backgroundColor: `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${0.02 + intensity * 0.18})`,
                boxShadow:
                  intensity > 0.1
                    ? `inset 0 0 ${10 + intensity * 20}px rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${0.12 + intensity * 0.3})`
                    : "none",
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}
