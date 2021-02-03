import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from "victory";

function Assignment({
  singleAssignmentData,
  showFunRating,
  showDifficultyRating,
}) {
  console.log(showDifficultyRating);
  return (
    <>
      <VictoryChart domainPadding={15}
       >
        <VictoryAxis style={{ tickLabels: { angle: 0, fontSize: 5 } }} />

        <VictoryAxis
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />
         <VictoryAxis
         orientation={"right"}
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />

        <VictoryGroup 
       offset={7} >
          {showFunRating && (
            <VictoryBar
            colorScale={"blue"}
              data={singleAssignmentData}
              x={"name"}
              y={"funRating"}
            />
          )}

          {showDifficultyRating && (
            <VictoryBar
            colorScale={"red"}
              data={singleAssignmentData}
              x={"name"}
              y={"difficultyRating"}
            />
          )}
        </VictoryGroup>
      </VictoryChart>
    </>
  );
}

export default Assignment;
