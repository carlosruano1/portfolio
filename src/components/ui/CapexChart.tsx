"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const rawData = {
  Amazon:    [40.14, 61.05, 63.65, 52.70, 83.00, 131.80],
  Alphabet:  [22.28, 24.64, 31.49, 32.30, 52.50,  91.40],
  Microsoft: [15.44, 20.62, 23.89, 28.10, 44.50,  64.60],
  Meta:      [15.16, 18.69, 31.19, 27.00, 37.30,  72.00],
  Apple:     [ 7.31, 11.09, 10.71, 11.00,  9.40,  12.70],
};

const years = [2020, 2021, 2022, 2023, 2024, 2025];

type Company = keyof typeof rawData;

const chartData = years.map((year, i) => {
  const point: Record<string, number> = { year };
  (Object.keys(rawData) as Company[]).forEach((company) => {
    point[company] = parseFloat(
      (rawData[company] as number[])
        .slice(0, i + 1)
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
    );
  });
  return point;
});

const COLORS: Record<Company, string> = {
  Amazon:    "#FF6B6B",
  Alphabet:  "#4ECDC4",
  Microsoft: "#45B7D1",
  Meta:      "#A855F7",
  Apple:     "#D3AF5E",
};

interface TooltipPayload {
  name: string;
  value: number;
  color: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: number;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  const sorted = [...payload].sort((a, b) => b.value - a.value);

  return (
    <div className="bg-surface/95 backdrop-blur-md border border-white/20 rounded-lg p-3 shadow-xl min-w-[180px]">
      <p className="text-accent font-semibold mb-2">{label} (Cumulative)</p>
      {sorted.map((entry) => (
        <p key={entry.name} className="text-sm flex justify-between gap-4">
          <span style={{ color: entry.color }}>{entry.name}</span>
          <span className="text-textSoft/90 font-medium">${entry.value.toFixed(1)}B</span>
        </p>
      ))}
    </div>
  );
};

export function CapexChart() {
  return (
    <div className="w-full h-[480px] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 20, left: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
          <XAxis
            dataKey="year"
            stroke="rgba(240,240,240,0.6)"
            tick={{ fill: "rgba(240,240,240,0.7)", fontSize: 13 }}
          />
          <YAxis
            stroke="rgba(240,240,240,0.6)"
            tick={{ fill: "rgba(240,240,240,0.7)", fontSize: 13 }}
            tickFormatter={(v) => `$${v}B`}
            label={{
              value: "Cumulative Capex (USD Billions)",
              angle: -90,
              position: "insideLeft",
              offset: -10,
              style: { fill: "rgba(240,240,240,0.8)", fontSize: 13 },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "16px", color: "rgba(240,240,240,0.8)", fontSize: 13 }}
          />
          {(Object.keys(COLORS) as Company[]).map((company) => (
            <Line
              key={company}
              type="monotone"
              dataKey={company}
              stroke={COLORS[company]}
              strokeWidth={company === "Apple" ? 3 : 2}
              dot={{ r: 4, strokeWidth: 0, fill: COLORS[company] }}
              activeDot={{ r: 6 }}
              strokeDasharray={company === "Apple" ? "0" : undefined}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
