import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#3f4fd4", "#b97a00", "#2e7d32", "#c0392b"];

function Chart({ applications }) {
  const data = [
    { name: "Applied", value: applications.filter((a) => a.status === "Applied").length },
    { name: "Interview", value: applications.filter((a) => a.status === "Interview").length },
    { name: "Selected", value: applications.filter((a) => a.status === "Selected").length },
    { name: "Rejected", value: applications.filter((a) => a.status === "Rejected").length },
  ].filter((d) => d.value > 0);

  if (applications.length === 0) return null;

  return (
    <div className="chart-card">
      <h2>Application Stats</h2>
      <div className="chart-wrapper">
        <PieChart width={320} height={280}>
          <Pie
            data={data}
            cx={150}
            cy={120}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Chart;