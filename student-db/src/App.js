import studentsData from "./mock-data/students.json";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

function App() {
  const evelyn = studentsData
    .filter((student) => student.name === "Evelyn")
    .slice(0, 10);
  console.log(evelyn);
  return (
    <div>
      <h1>VictoryBar</h1>
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          tickFormat={[
            "wk1",
            "wk2",
            "wk3",
            "wk4",
            "wk5",
            "wk6",
            "wk7",
            "wk8",
          ]}
        />
        <VictoryAxis 
        dependentAxis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={(x)=> (`${x} pnt`)}/>
        <VictoryBar data={evelyn} x={"assignment"} y={"difficulty-rating"} />
      </VictoryChart>
    </div>
  );
}

export default App;
