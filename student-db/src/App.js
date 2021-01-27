import "./App.css";
import studentDB from "./mock-data/students.json";

function App() {
  // get an array from all assignments
  //compare the value from that array with students.json
  //and then take the difficultyrating and push it to the 2nd index of the array

  const getAvgRating = (array, rating) => {
    //this calculates average of value rating for key assignment of format  [{key: rating, assignment: value}, {object}, {object}]
    //****kan gebruikt worden voor avg per student met extra parameter???

    // filters by assignment and create non-duplicate array from assignment
    const filteredByAssignment = array.map((student) => student.assignment);
    // console.log(filteredByAssignment);
    const uniqueAssignments = [...new Set(filteredByAssignment)];
    // map new Set and create numrating of corresponding assignment
    const sortedByAssignment = uniqueAssignments.map((assignment) => {
      const ratingList = array
        .filter((student) => student.assignment === assignment)
        .map((student) => student[rating]);
        console.log(ratingList);
      return {
        
        assignment: assignment,
        arrayOfRatings: ratingList,
      };
    });
    //calc avg for arrayOfRating: ratingList  in previous aray[assignment, [1, 2, 3, 4]] = [assignment, avg(2.5)]
    const reducer = (acc, curr) => acc + curr;
    const avgRating = sortedByAssignment.map((item) => {
     const avgNumber = item.arrayOfRatings.reduce(reducer)/ item.arrayOfRatings.length; //of gewoon delen door 10 :)
      return {
        assignment: item.assignment,
        avgRating: avgNumber
          
      };
    });
    return avgRating;
  };
  console.log(getAvgRating(studentDB, "funRating"));

  return <div>App</div>;
}

export default App;
