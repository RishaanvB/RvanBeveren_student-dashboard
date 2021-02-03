import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import theme from "../Themes/ThemeStudent";

function Student({
  name,
  student,
  showBarChart,
  studentName,
  getAssignmentRating,
  singleStudentData,
  showDifficultyRating,
  assignment,
  showFunRating,
  showAssignment,
  fun,
}) {
  console.log(name);
  return (
    <>
      {showBarChart ? (
        <VictoryChart domainPadding={2} theme={theme}>
          <VictoryLabel
            text={studentName}
            x={125}
            y={10}
            textAnchor="middle"
            style={{ fontSize: 5 }}
          />
          <VictoryAxis style={{ tickLabels: { angle: 70, fontSize: 2 } }} />

          <VictoryAxis
            dependentAxis={true}
            domain={[0, 4]}
            tickFormat={[1, 2, 3, 4, 5]}
            style={{ ticks: { size: 1, padding: 0 } }}
          />
          <VictoryAxis
            orientation={"right"}
            dependentAxis={true}
            domain={[0, 4]}
            tickFormat={[1, 2, 3, 4, 5]}
            style={{ ticks: { size: 1, padding: 0 } }}

            // style={{ tickLabels: { fontSize: 8, padding: 5 } }}
          />
          <VictoryGroup offset={1}>
            {showFunRating && (
              <VictoryBar
                labels={({ datum }) =>
                  `Assignment: ${datum.assignment}, Fun: ${datum.funRating}`
                }
                labelComponent={<VictoryTooltip />}
                colorScale={"blue"}
                data={student}
                x={"assignment"}
                y={"funRating"}
              />
            )}

            {showDifficultyRating && (
              <VictoryBar
                labels={({ datum }) =>
                  `Assignment: ${datum.assignment}, Difficulty: ${datum.difficultyRating}`
                }
                labelComponent={<VictoryTooltip />}
                colorScale={"red"}
                data={student}
                x={"assignment"}
                y={"difficultyRating"}
              />
            )}
          </VictoryGroup>
        </VictoryChart>
      ) : (
        /*    =====================VictoryLine starts here========================= */
        /*    =====================VictoryLine starts here========================= */
        /*    =====================VictoryLine starts here========================= */
        /*    =====================VictoryLine starts here========================= */

        <VictoryChart
          domainPadding={1}
          theme={theme}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) =>
                `Assignment: ${datum.assignment}, Fun: ${datum.funRating}, Difficulty: ${datum.difficultyRating}`
              }
              labelComponent={<VictoryTooltip dy={0} constrainToVisibleArea />}
            />
          }>
          <VictoryAxis style={{ tickLabels: { angle: 70, fontSize: 2 } }} />

          <VictoryAxis
            dependentAxis={true}
            domain={[0, 4]}
            tickFormat={[1, 2, 3, 4, 5]}
            style={{ ticks: { size: 1, padding: 0 } }}
          />
          <VictoryAxis
            orientation={"right"}
            dependentAxis={true}
            domain={[0, 4]}
            tickFormat={[1, 2, 3, 4, 5]}
            style={{ ticks: { size: 1, padding: 0 } }}
          />

          {/* <VictoryGroup offset={2} > */}
          {showFunRating && (
            <VictoryLine
              style={{ data: { stroke: "red" } }}
              data={student}
              x={"assignment"}
              y={"funRating"}
            />
          )}

          {showDifficultyRating && (
            <VictoryLine
              colorScale={"red"}
              data={student}
              x={"assignment"}
              y={"difficultyRating"}
            />
          )}
          {/* </VictoryGroup> */}
        </VictoryChart>
      )}
    </>
  );
}

export default Student;
