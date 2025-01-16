"use client";

import { Card } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "Jan 1",
    chats: 145,
  },
  {
    date: "Jan 2",
    chats: 231,
  },
  {
    date: "Jan 3",
    chats: 322,
  },
  {
    date: "Jan 4",
    chats: 428,
  },
  {
    date: "Jan 5",
    chats: 492,
  },
  {
    date: "Jan 6",
    chats: 534,
  },
  {
    date: "Jan 7",
    chats: 689,
  },
];

export function UsageChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="chats"
          stroke="#8884d8"
          fill="url(#gradient)"
          fillOpacity={0.2}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
}
