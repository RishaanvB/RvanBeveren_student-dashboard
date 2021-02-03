import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
} from "victory";

function Student({
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
  return (
    <>
      {showBarChart ? (
        <VictoryChart domainPadding={5}>
          <VictoryAxis style={{ tickLabels: { angle: 80, fontSize: 5 } }} />

          <VictoryAxis
            dependentAxis={true}
            domain={[0, 4]}
            tickFormat={[1, 2, 3, 4, 5]}
            style={{ tickLabels: { fontSize: 8, padding: 5 } }}
          />

          <VictoryGroup offset={2} colorScale={"qualitative"}>
            {showFunRating && (
              <VictoryBar data={singleStudentData} x={"assignment"} y={fun} />
            )}

            {/*  { showDifficultyRating && <VictoryBar
            data={singleStudentData}
            x={"assignment"}
            y={"difficultyRating"}
          />} */}
          </VictoryGroup>
        </VictoryChart>
      ) : (
        // ===============VictoryLine starts here============

        <VictoryChart domainPadding={5}>
          <VictoryAxis style={{ tickLabels: { angle: 80, fontSize: 5 } }} />

          <VictoryAxis
            dependentAxis={true}
            domain={[0, 4]}
            tickFormat={[1, 2, 3, 4, 5]}
            style={{ tickLabels: { fontSize: 8, padding: 5 } }}
          />

          <VictoryGroup offset={2} colorScale={"qualitative"}>
            {showFunRating && (
              <VictoryLine
                data={singleStudentData}
                x={"assignment"}
                y={"funRating"}
              />
            )}

            {/*  { showDifficultyRating && <VictoryLine
          data={singleStudentData}
          x={"assignment"}
          y={"difficultyRating"}
        />} */}
          </VictoryGroup>
        </VictoryChart>
      )}
    </>
  );
}

export default Student;
