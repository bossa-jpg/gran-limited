import { Box } from "@mui/material";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartsProps } from "../types";

export const MiniChart: React.FC<ChartsProps> = ({ data }) => {
  const chartData = data.map((point) => ({
    name: point.timestamp,
    value: point.value,
  }));

  return (
    <Box width={120} height={60}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="4 4" fill="#ccc" fillOpacity={0.4} />
          <XAxis hide={true} />
          <YAxis hide={true} />
          <Line
            type="linear"
            dataKey="value"
            stroke="red"
            strokeWidth={2}
            strokeLinecap="butt"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
