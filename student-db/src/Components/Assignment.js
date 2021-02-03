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

        <VictoryGroup 
       offset={7} colorScale={"qualitative"}>
          {showFunRating && (
            <VictoryBar
            animate={{duration: 500}} 
              data={singleAssignmentData}
              x={"name"}
              y={"funRating"}
            />
          )}

          {showDifficultyRating && (
            <VictoryBar
            animate={{duration: 500}} 
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
