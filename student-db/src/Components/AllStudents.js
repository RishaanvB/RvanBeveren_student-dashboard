import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from "victory";


const AllStudents = ({funData, difficultyData, showDifficultyRating, showFunRating})=>{
    return(

        <VictoryChart domainPadding={5}>
        <VictoryAxis style={{ tickLabels: { angle: 80, fontSize: 5 } }} />

        <VictoryAxis
          dependentAxis={true}
          domain={[0, 4]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{ tickLabels: { fontSize: 8, padding: 5 } }}
        />

        <VictoryGroup offset={2} colorScale={"qualitative"}>
         { showFunRating && <VictoryBar
            data={funData}
            x={"assignment"}
            y={"avgRating"}
          />}

          { showDifficultyRating && <VictoryBar
            data={difficultyData}
            x={"assignment"}
            y={"avgRating"}
          />}
        </VictoryGroup>
      </VictoryChart>
        
    )
}

export default AllStudents