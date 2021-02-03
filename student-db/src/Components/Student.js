import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
} from "victory";

function Student({
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
  return (
    <>
      {showBarChart ? (
        <VictoryChart domainPadding={5}
       >
          <VictoryAxis style={{ tickLabels: { angle: 80, fontSize: 5 } }} />

          <VictoryAxis
            dependentAxis={true}
            domain={[0, 4]}
            tickFormat={[1, 2, 3, 4, 5]}
            style={{ tickLabels: { fontSize: 8, padding: 5 } }}
          />

          <VictoryGroup offset={2} colorScale={"qualitative"}>
            {showFunRating && (
              <VictoryBar 
              animate={{duration: 500}} data={student} x={"assignment"} y={"funRating"} />
            )}

             { showDifficultyRating && <VictoryBar
             animate={{duration: 500}} 
            data={student}
            x={"assignment"}
            y={"difficultyRating"}
          />}
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
              animate={{duration: 500}} data={student} x={"assignment"} y={"funRating"} />
            )}

            {showDifficultyRating && (
              <VictoryLine
              animate={{duration: 500}} 
                data={student}
                x={"assignment"}
                y={"difficultyRating"}
              />
            )}
          </VictoryGroup>
        </VictoryChart>
      )}
    </>
  );
}

export default Student;
