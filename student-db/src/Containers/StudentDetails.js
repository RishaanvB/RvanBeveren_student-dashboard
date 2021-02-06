import { useLocation, useParams } from "react-router-dom";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryLegend,
} from "victory";
import theme from "../Themes/ThemeStudent";

import { useEffect, useState } from "react";
// import Student from "../Components/Student";
// import RatingCheckboxForm from "../Components/RatingCheckboxForm";
import allStudentsData from "../helperfunctions/helperFunctions";



const StudentDetails = ({showFunRating,showDifficultyRating,showBarChart,showChartBtnDisplay}) => {
  showChartBtnDisplay(true)

  const red = "#a21232";
  const blue = "#1687a7";
  // console.log(location);
  const { name } = useParams();
  // console.log(useParams());
// console.log(name, "name in studentdetails");
  const student = allStudentsData.filter(
    (student) => student.name === name
  );

  // const [student, setStudent] = useState(singleStudentData);

  // useEffect(
  //   () =>
  //     setStudent(allStudentsData.filter((student) => student.name === name)),
  //   [location, name]
  // );

  // const singleAssignmentData = allStudentsData.filter(
  //   (student) => student.assignment === assignment
  // );



  console.log(student);
  
  // console.log(showBarChart);

  // const handleChartChange = () => {
  //   console.log("handleChartChange linechart");
  //   setShowBarChart((prev) => !prev);
  // };
  // console.log("hey");
// console.log(name, "name in studentdetails bottom");

  return (
    <div>
      {/* <button onClick={handleChartChange}>handleChartChange </button> */}

      {showBarChart ? (
        <VictoryChart domainPadding={2} theme={theme}>
          <VictoryLegend
            x={100}
            y={10}
            // centerTitle
            orientation="horizontal"
            gutter={5}
            data={[
              { name: "Enjoyment", symbol: { fill: blue } },
              { name: "Difficulty", symbol: { fill: red } },
            ]}
          />
          <VictoryLabel
            text={name}
            x={125}
            y={5}
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
                style={{ data: { fill: blue } }}
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
                style={{ data: { fill: red } }}
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
                `Assignment: ${datum.assignment} Fun: ${datum.funRating} Difficulty: ${datum.difficultyRating}`
              }
              labelComponent={<VictoryTooltip dy={0} constrainToVisibleArea />}
            />
          }>
          <VictoryLegend
            x={100}
            y={10}
            // centerTitle
            orientation="horizontal"
            gutter={5}
            data={[
              { name: "Enjoyment", symbol: { fill: blue } },
              { name: "Difficulty", symbol: { fill: red } },
            ]}
          />
          <VictoryLabel
            text={name}
            x={125}
            y={5}
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
          />

          {/* <VictoryGroup offset={2} > */}
          {showFunRating && (
            <VictoryLine
              style={{ data: { stroke: blue } }}
              data={student}
              x={"assignment"}
              y={"funRating"}
            />
          )}

          {showDifficultyRating && (
            <VictoryLine
              style={{ data: { stroke: red } }}
              // colorScale={"#a21232"}
              data={student}
              x={"assignment"}
              y={"difficultyRating"}
            />
          )}
          {/* </VictoryGroup> */}
        </VictoryChart>
      )}
     

      
    </div>
  );
};

export default StudentDetails;
