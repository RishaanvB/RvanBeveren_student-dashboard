import studentDB from "../mock-data/students.json";
import { useState } from "react";
import StudentsOverview from "../Containers/StudentsOverview";

import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from "victory";

function GraphContainer() {
  const getAvgRating = (array, rating) => {
    //this calculates average of value rating for key assignment of format  [{key: rating, assignment: value}, {object}, {object}]
    //****kan gebruikt worden voor avg per student met extra parameter???
    // filters by assignment and create non-duplicate array from assignment
    const filteredByAssignment = array.map((student) => student.assignment);
    // console.log(filteredByAssignment);
    const uniqueAssignments = [
      ...new Set(filteredByAssignment),
    ]; /* .slice(0, 10) */
    // console.log(uniqueAssignments.slice(0.10));

    // map new Set and create numrating of corresponding assignment
    const sortedByAssignment = uniqueAssignments.map((assignment) => {
      const ratingList = array
        .filter((student) => student.assignment === assignment)
        .map((student) => student[rating]);
      return {
        assignment: assignment,
        arrayOfRatings: ratingList,
      };
    });
    //calc avg for arrayOfRating: ratingList  in previous aray[assignment, [1, 2, 3, 4]] = [assignment, avg(2.5)]
    const reducer = (acc, curr) => acc + curr;
    const avgRating = sortedByAssignment.map((item) => {
      const avgNumber =
        item.arrayOfRatings.reduce(reducer) / item.arrayOfRatings.length; //of gewoon delen door 10 :)
      return {
        assignment: item.assignment,
        avgRating: avgNumber,
      };
    });
    return avgRating;
  };
  console.log(getAvgRating(studentDB, "funRating"));
  const initialFunState = getAvgRating(studentDB, "funRating");
  const initialDifficultyState = getAvgRating(studentDB, "difficultyRating");
  //   initialstate should be a getAvgRating(studentDB, "funRating")
  const [fun, setFun] = useState(initialFunState);
  const [difficulty, setDifficulty] = useState(initialDifficultyState);
  const [Axis, setAxis] = useState("avgRating");

  const change = () => {
    const evelyn = studentDB.filter((student) => student.name === "Evelyn");
    console.log(evelyn, "evelyn");
    setFun(evelyn);
    setDifficulty(evelyn);
    setAxis("funRating");
  };
  //   ticklabels is ticks, padding = distance from axis, tickformat = how ticks are displayed, domain= range of ticks
  return (
    <>
      <button onClick={() => change()}>Eveleyn</button>
      <h1>GraphContainer</h1>

      <VictoryChart domainPadding={5}>
        <VictoryAxis style={{ tickLabels: { angle: 80, fontSize: 5 } }} />

        <VictoryAxis
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />

        <VictoryGroup offset={2} colorScale={"qualitative"}>
          <VictoryBar
            animate={{ duration: 1000 }}
            data={fun}
            x={"assignment"}
            y={Axis}
          />

          {/* <VictoryBar data={difficulty} x={"assignment"} y={"avgRating"} /> */}
        </VictoryGroup>
      </VictoryChart>
      <StudentsOverview setFun={setFun} />
    </>
  );
}

export default GraphContainer;
