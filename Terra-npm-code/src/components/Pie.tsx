import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const colors = ["#0A2463", "#3E92CC"];

export default function Pie({ data }: { data: { compliant: number; non_compliant: number } }) {
  const chart = [
    { name: "Compliant", value: data.compliant },
    { name: "Non-Compliant", value: data.non_compliant }
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={chart} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          {chart.map((_, idx) => <Cell key={idx} fill={colors[idx % colors.length]} />)}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}