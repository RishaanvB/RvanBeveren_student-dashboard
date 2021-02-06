import theme from "../Themes/ThemeAssignment";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import allStudentsData from "../helperfunctions/helperFunctions";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
} from "victory";

const AssignmentDetails = ({
  showFunRating,
  showDifficultyRating,
  showChartBtnDisplay,
}) => {
  const { assignment } = useParams();
  const red = "#a21232";
  const blue = "#1687a7";

  const singleAssignmentData = allStudentsData.filter(
    (student) => student.assignment === assignment
    );

    useEffect(() => showChartBtnDisplay(false), [showChartBtnDisplay]);
    
  return (
    <div>
      <VictoryChart domainPadding={10} theme={theme}>
        <VictoryLegend
          x={100}
          y={15}
          orientation="horizontal"
          gutter={5}
          data={[
            { name: "Enjoyment", symbol: { fill: blue } },
            { name: "Difficulty", symbol: { fill: red } },
          ]}
        />
        <VictoryLabel
          text={assignment}
          x={125}
          y={10}
          textAnchor="middle"
          style={{ fontSize: 5 }}
        />
        <VictoryAxis />

        <VictoryAxis
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
        <VictoryAxis
          orientation={"right"}
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
        />

        <VictoryGroup offset={5}>
          {showFunRating && (
            <VictoryBar
              style={{ data: { fill: "#1687a7" } }}
              data={singleAssignmentData}
              x={"name"}
              y={"funRating"}
            />
          )}

          {showDifficultyRating && (
            <VictoryBar
              style={{ data: { fill: "#a21232" } }}
              data={singleAssignmentData}
              x={"name"}
              y={"difficultyRating"}
            />
          )}
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default AssignmentDetails;
