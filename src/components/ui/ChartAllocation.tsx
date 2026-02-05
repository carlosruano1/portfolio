"use client";

import { motion } from "framer-motion";

const ASSETS = [
  { id: "equities", label: "Equities", color: "var(--color-accent)" },
  { id: "fixed", label: "Fixed income", color: "var(--color-action)" },
  { id: "alternatives", label: "Alternatives", color: "var(--color-text-soft)" },
  { id: "cash", label: "Cash", color: "var(--color-surface)" },
] as const;

export type AllocationState = Record<string, number>;

const defaultAllocation: AllocationState = {
  equities: 50,
  fixed: 30,
  alternatives: 15,
  cash: 5,
};

type Props = {
  allocation?: AllocationState;
  onAllocationChange?: (next: AllocationState) => void;
};

export function ChartAllocation({ allocation = defaultAllocation, onAllocationChange }: Props) {
  const total = Object.values(allocation).reduce((a, b) => a + b, 0);
  const normalized = total > 0 ? ASSETS.map((a) => (allocation[a.id] ?? 0) / total) : [0.25, 0.25, 0.25, 0.25];

  const set = (id: string, value: number) => {
    const next = { ...allocation, [id]: Math.max(0, Math.min(100, value)) };
    const sum = Object.values(next).reduce((a, b) => a + b, 0);
    if (sum <= 100) onAllocationChange?.(next);
  };

  return (
    <div className="space-y-6">
      <div className="flex h-8 w-full overflow-hidden rounded-full">
        {ASSETS.map((asset, i) => (
          <motion.div
            key={asset.id}
            layout
            className="h-full"
            style={{
              width: `${normalized[i] * 100}%`,
              backgroundColor: asset.color,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {ASSETS.map((asset) => (
          <div key={asset.id} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-textSoft">{asset.label}</span>
              <span className="font-medium text-text">{allocation[asset.id] ?? 0}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={allocation[asset.id] ?? 0}
              onChange={(e) => set(asset.id, Number(e.target.value))}
              className="h-2 w-full appearance-none rounded-full bg-surface accent-accent"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
