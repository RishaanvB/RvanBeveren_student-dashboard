// import studentDB from "../mock-data/students.json";
// import { useState } from "react";
// import StudentList from "./StudentList";

import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from "victory";

function Student({studentName, singleStudentData, showDifficultyRating, showFunRating}) {
console.log(studentName, "stujdentName");
  // const handleChange = () => {
  //   const evelyn = studentDB.filter((student) => student.name === "Evelyn");
  //   setFunData(evelyn);
  //   setFunRatingAxis("funRating");
  // };

  return (
    <>

      {/* //   ticklabels is ticks, padding = distance from axis, tickformat = how ticks are displayed, domain= range of ticks */}
      <VictoryChart domainPadding={5}>
        <VictoryAxis style={{ tickLabels: { angle: 80, fontSize: 5 } }} />

        <VictoryAxis
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />

       <VictoryGroup offset={2} colorScale={"qualitative"}>
      
       { showFunRating && <VictoryBar
            data={singleStudentData}
            x={"assignment"}
            y={"funRating"}
          />}

         { showDifficultyRating && <VictoryBar
            data={singleStudentData}
            x={"assignment"}
            y={"difficultyRating"}
          />}
        </VictoryGroup>
      </VictoryChart>
    </>
  );
}

export default Student;
