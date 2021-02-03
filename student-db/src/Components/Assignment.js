import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import theme from "../Themes/ThemeAssignment";
function Assignment({
  singleAssignmentData,
  showFunRating,
  showDifficultyRating,
  assignment,
}) {
  console.log(showDifficultyRating);
  return (
    <>
      <VictoryChart domainPadding={10} theme={theme}>
        <VictoryLabel
          text={assignment}
          x={125}
          y={10}
          textAnchor="middle"
          style={{ fontSize: 5 }}
        />
        <VictoryAxis /* style={{ tickLabels: { angle: 0, fontSize: 5 } }} */ />

        <VictoryAxis
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          // style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />
        <VictoryAxis
          orientation={"right"}
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          // style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />

        <VictoryGroup offset={5}>
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
