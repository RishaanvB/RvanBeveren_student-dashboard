import allStudentsData from "../Components/helperFunctions";

import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from "victory";
import { useState, useEffect } from "react";

function Assignment({ singleAssignmentData, showFunRating }) {
  return (
    <>
      <VictoryChart domainPadding={5}>
        <VictoryAxis style={{ tickLabels: { angle: 80, fontSize: 5 } }} />

        <VictoryAxis
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />

        <VictoryGroup offset={2} colorScale={"qualitative"}>
          <VictoryBar data={singleAssignmentData} x={"name"} y={"funRating"} />

          {/*  { showDifficultyRating && <VictoryBar
            data={singleStudentData}
            x={"assignment"}
            y={"difficultyRating"}
          />} */}
        </VictoryGroup>
      </VictoryChart>
    </>
  );
}

export default Assignment;
