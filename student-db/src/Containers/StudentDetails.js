import theme from "../Themes/ThemeStudent";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import allStudentsData from "../helperfunctions/helperFunctions";

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

const StudentDetails = ({
  showFunRating,
  showDifficultyRating,
  showBarChart,
  showChartBtnDisplay,
}) => {
  const { name } = useParams();
  const red = "#a21232";
  const blue = "#1687a7";

  const student = allStudentsData.filter((student) => student.name === name);

  useEffect(() => showChartBtnDisplay(true), [showChartBtnDisplay]);

  return (
    <div>
      {showBarChart ? (
        <VictoryChart domainPadding={2} theme={theme}>
          <VictoryLegend
            x={100}
            y={10}
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
              data={student}
              x={"assignment"}
              y={"difficultyRating"}
            />
          )}
        </VictoryChart>
      )}
    </div>
  );
};

export default StudentDetails;
