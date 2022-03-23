import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { red, blue, purple, blueGrey, green } from "@mui/material/colors";

function getProjet(object) {
  const newArr = [];
  for (const [key, value] of Object.entries(object)) {
    if (key === "simulations_count") {
    } else {
      let newObj = { name: value[0], value: value[1] };
      newArr.push(newObj);
    }
  }
  return newArr;
}

const COLORS = [red[600], blue[600], purple[600], green[600], blueGrey[600]];

function ExamplePieChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <PieChart>
        <Pie
          data={getProjet(data)}
          dataKey="value"
          nameKey="name"
          fontSize="12px"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          fill={blue[800]}
          label={({ name, value }) => `${name} : ${value}`}
        >
          {getProjet(data).map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ExamplePieChart;
