// import {
//   VictoryChart,
//   VictoryGroup,
//   VictoryBar,
//   VictoryAxis,
//   VictoryLabel,
//   VictoryLegend,
// } from "victory";
// import theme from "../Themes/ThemeAssignment";
// function Assignment({
//   singleAssignmentData,
//   showFunRating,
//   showDifficultyRating,
//   assignment,
// }) {
//   const red = "#a21232";
//   const blue = "#1687a7";
//   console.log(showDifficultyRating);
//   return (
//     <>
//       <VictoryChart domainPadding={10} theme={theme}>
//         <VictoryLegend
//           x={100}
//           y={15}
//           // centerTitle
//           orientation="horizontal"
//           gutter={5}
//           data={[
//             { name: "Enjoyment", symbol: { fill: blue } },
//             { name: "Difficulty", symbol: { fill: red } },
//           ]}
//         />
//         <VictoryLabel
//           text={assignment}
//           x={125}
//           y={10}
//           textAnchor="middle"
//           style={{ fontSize: 5 }}
//         />
//         <VictoryAxis /* style={{ tickLabels: { angle: 0, fontSize: 5 } }} */ />

//         <VictoryAxis
//           dependentAxis={true}
//           domain={[0, 4]}
//           tickFormat={[1, 2, 3, 4, 5]}
//           // style={{ tickLabels: { fontSize: 8, padding: 5 } }}
//         />
//         <VictoryAxis
//           orientation={"right"}
//           dependentAxis={true}
//           domain={[0, 4]}
//           tickFormat={[1, 2, 3, 4, 5]}
//           // style={{ tickLabels: { fontSize: 8, padding: 5 } }}
//         />

//         <VictoryGroup offset={5}>
//           {showFunRating && (
//             <VictoryBar
//               style={{ data: { fill: "#1687a7" } }}
//               data={singleAssignmentData}
//               x={"name"}
//               y={"funRating"}
//             />
//           )}

//           {showDifficultyRating && (
//             <VictoryBar
//               style={{ data: { fill: "#a21232" } }}
//               data={singleAssignmentData}
//               x={"name"}
//               y={"difficultyRating"}
//             />
//           )}
//         </VictoryGroup>
//       </VictoryChart>
//     </>
//   );
// }

// export default Assignment;
