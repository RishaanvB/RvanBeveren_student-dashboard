import "./App.css";
import studentDB from "./mock-data/students.json";

function App() {
  // get an array from all assignments
  //compare the value from that array with students.json
  //and then take the difficultyrating and push it to the 2nd index of the array

  const getAvgRating = () => {
    const filteredByAssignment = studentDB.map((student) => student.assignment);
    const uniqueAssignments = [...new Set(filteredByAssignment)];
    const sortedByAssignment = uniqueAssignments.map((assignment) => [
      assignment,
      studentDB
        .filter((student) => student.assignment === assignment)
        .map((student) => student["difficultyRating"]),
    ]);
    const reducer = (acc, curr) => acc + curr;
    const avgRating = sortedByAssignment.map((item) => [
      item[0],
      item[1].reduce(reducer) / item[1].length,
    ]);
    return avgRating
    console.log(avgRating, "avg");
  };
  console.log(getAvgRating());
 

  return <div>App</div>;
}

export default App;
