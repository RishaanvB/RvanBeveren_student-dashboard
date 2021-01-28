import { VictoryBar } from "victory";
import studentDB from "../mock-data/students.json";

function StudentsOverview() {

  const evelyn =  studentDB.filter(student => student === "Evelyn")


  return (
    <div>
      <h1>StudentsOverview</h1>
      {/* <button onClick={()=> } >Show Student</button> */}
    </div>
  );
}

export default StudentsOverview;

//<Container /> heeft <Navbar /> en <Switch /> met Routers naar studenten
// <AllStudentsOverview /> waarbij <Student /> wordt gemaakt voor iedere student?
// <Student /> individuele student voor each of the students (bij elkaar 10)

// <App 1 />
//      <GraphContainer 2 />
//          <Navbar  3 /> <Switch  3/>
//      <StudentsOverview  2/>  --> contains useState()
//             <StudentList  3 /> --> creates graph for each student
//                  <Student  4 />...
//                  <Student  4 />...
//                  <Student  4 />... *10 in total
