"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { league: "Premier League", expenditure: 453.17, income: 288.93 },
  { league: "Serie A", expenditure: 243.59, income: 187.20 },
  { league: "Brasileiro", expenditure: 203.57, income: 185.40 },
  { league: "MLS", expenditure: 153.21, income: 56.67 },
  { league: "Saudi Pro", expenditure: 142.14, income: 49.68 },
  { league: "Bundesliga", expenditure: 102.30, income: 23.02 },
  { league: "Ligue 1", expenditure: 101.10, income: 179.85 },
  { league: "Süper Lig", expenditure: 101.09, income: 82.52 },
  { league: "LaLiga", expenditure: 75.50, income: 121.70 },
  { league: "Liga Portugal", expenditure: 59.48, income: 79.46 },
];

interface TooltipPayload {
  dataKey: string;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const expenditure = payload.find((p) => p.dataKey === 'expenditure')?.value || 0;
    const income = payload.find((p) => p.dataKey === 'income')?.value || 0;
    const balance = income - expenditure;

    return (
      <div className="bg-surface/95 backdrop-blur-md border border-accent/30 rounded-lg p-4 shadow-xl">
        <p className="text-accent font-semibold mb-3">{label}</p>
        <div className="space-y-1.5">
          <p className="text-textSoft/90 text-sm">
            <span className="text-textSoft/60">Expenditure:</span>{" "}
            <span className="font-medium text-red-400">€{expenditure.toFixed(1)}m</span>
          </p>
          <p className="text-textSoft/90 text-sm">
            <span className="text-textSoft/60">Income:</span>{" "}
            <span className="font-medium text-green-400">€{income.toFixed(1)}m</span>
          </p>
          <div className="pt-1.5 mt-1.5 border-t border-white/10">
            <p className="text-textSoft/90 text-sm">
              <span className="text-textSoft/60">Net Balance:</span>{" "}
              <span className={`font-semibold ${balance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {balance >= 0 ? '+' : ''}€{balance.toFixed(1)}m
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export function NetSpendingChart() {
  return (
    <div className="w-full h-[650px] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <ResponsiveContainer width="100%" height="100%" minHeight={650}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 70,
            bottom: 140,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="league"
            stroke="rgba(240,240,240,0.8)"
            tick={{ fill: 'rgba(240,240,240,0.9)', fontSize: 13 }}
            angle={-45}
            textAnchor="end"
            height={140}
            interval={0}
            dy={20}
          />
          <YAxis
            stroke="rgba(240,240,240,0.8)"
            tick={{ fill: 'rgba(240,240,240,0.9)', fontSize: 13 }}
            tickFormatter={(value) => `€${value}m`}
            domain={[0, 460]}
            ticks={[0, 100, 200, 300, 400, 460]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(211,175,94,0.1)' }} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="square"
          />
          <Bar
            dataKey="expenditure"
            fill="#D3AF5E"
            name="Expenditure"
            radius={[4, 4, 0, 0]}
            maxBarSize={60}
          />
          <Bar
            dataKey="income"
            fill="rgba(240,240,240,0.6)"
            name="Income"
            radius={[4, 4, 0, 0]}
            maxBarSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
