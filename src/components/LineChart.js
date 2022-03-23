import { ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function ExampleLineChart({ data, datakey, color }) {
  return (
    <ResponsiveContainer width={"100%"} height={"90%"}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey={datakey ? datakey : "montant"}
          stroke={color ?? "#1976d2"}
        />
        <XAxis dataKey="jour" tick={{ fontSize: "13px" }} />
        <YAxis
          axisLine={false}
          width={40}
          tickSize={3}
          tick={{ fontSize: "10px" }}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
