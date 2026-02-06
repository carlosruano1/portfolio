"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { peVsForwardReturnsData } from "@/data/pe-vs-forward-returns";

interface TooltipPayload {
  payload: {
    Date?: string;
    PE_Ratio: number;
    Forward_10Y_Annualized_Return: number;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    
    // Check if this is scatter data or trend line data
    if (data.Date) {
      // Scatter point
      const date = new Date(data.Date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
      const peRatio = data.PE_Ratio.toFixed(1);
      const returnPct = (data.Forward_10Y_Annualized_Return * 100).toFixed(1);
      
      return (
        <div className="bg-surface/95 backdrop-blur-md border border-white/20 rounded-lg p-3 shadow-xl">
          <p className="text-accent font-semibold mb-2">{date}</p>
          <p className="text-textSoft/90 text-sm">
            <span className="text-textSoft/60">P/E Ratio:</span>{" "}
            <span className="font-medium">{peRatio}</span>
          </p>
          <p className="text-textSoft/90 text-sm">
            <span className="text-textSoft/60">10Y Return:</span>{" "}
            <span
              className={`font-medium ${
                data.Forward_10Y_Annualized_Return >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {returnPct}%
            </span>
          </p>
        </div>
      );
    }
  }

  return null;
};

export function PEReturnChart() {
  const scatterData = peVsForwardReturnsData.scatter_data;
  const trendData = peVsForwardReturnsData.linear_regression_trend_line;

  return (
    <div className="w-full h-[500px] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 60,
            left: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            type="number"
            dataKey="PE_Ratio"
            name="P/E Ratio"
            stroke="rgba(240,240,240,0.6)"
            label={{
              value: "Starting P/E Ratio",
              position: "insideBottom",
              offset: -10,
              style: { fill: "rgba(240,240,240,0.8)", fontSize: 14 },
            }}
            domain={[10, 50]}
            ticks={[10, 15, 20, 25, 30, 35, 40, 45, 50]}
          />
          <YAxis
            type="number"
            dataKey="Forward_10Y_Annualized_Return"
            name="10-Year Return"
            stroke="rgba(240,240,240,0.6)"
            label={{
              value: "Forward 10-Year Annualized Return",
              angle: -90,
              position: "insideLeft",
              offset: -10,
              style: { fill: "rgba(240,240,240,0.8)", fontSize: 14 },
            }}
            tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
            domain={[-0.02, 0.18]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: "3 3" }} />
          <Legend
            wrapperStyle={{
              paddingTop: "20px",
              color: "rgba(240,240,240,0.8)",
            }}
          />

          {/* Zero line */}
          <ReferenceLine
            y={0}
            stroke="rgba(255,255,255,0.3)"
            strokeDasharray="3 3"
          />

          {/* Scatter points */}
          <Scatter
            name="Historical Data (2000-2013)"
            data={scatterData}
            fill="#D3AF5E"
            fillOpacity={0.6}
            shape="circle"
          />

          {/* Trend line */}
          <Scatter
            name="OLS Trend Line"
            data={trendData}
            fill="none"
            line={{ stroke: "#D5FD51", strokeWidth: 2 }}
            shape={() => null}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
