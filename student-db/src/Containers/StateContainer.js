import { useState } from "react";
import { Link } from "react-router-dom";
import studentDB from "../mock-data/students.json";
import AllStudents from "./Student";
import StudentDetails from "../Components/StudentDetails";

function Container() {
  const getAvgRating = (array, rating) => {
    //this calculates average of value rating for key assignment of format  [{key: rating, assignment: value}, {object}, {object}]
    const filteredByAssignment = array.map((student) => student.assignment);
    const uniqueAssignments = [...new Set(filteredByAssignment)];
    const sortedByAssignment = uniqueAssignments.map((assignment) => {
      const ratingList = array
        .filter((student) => student.assignment === assignment)
        .map((student) => student[rating]);
      return {
        assignment: assignment,
        arrayOfRatings: ratingList,
      };
    });
    const reducer = (acc, curr) => acc + curr;
    const avgRating = sortedByAssignment.map((item) => {
      const avgNumber =
        item.arrayOfRatings.reduce(reducer) / item.arrayOfRatings.length;
      return {
        assignment: item.assignment,
        avgRating: avgNumber,
      };
    });
    return avgRating;
  };

  const students = [...new Set(studentDB.map((student) => student.name))];
  // console.log(students, "students in StudentNav");

  /* const setSingleStudentFunData = (e) => {
    const { value } = e.target;
    const student = studentDB.filter((student) => student.name === value);
    console.log(student, `data of student ${value}`);
    setFunData(student);
    setFunRatingAxis("funRating");
  }; */
  // const initialFunState = getAvgRating(studentDB, "funRating");
  // const initialDifficultyState = getAvgRating(studentDB, "difficultyRating");

  /*  const [funData, setFunData] = useState(initialFunState);
  const [difficultyData, setDifficultyData] = useState(initialDifficultyState);
  const [funRatingAxis, setFunRatingAxis] = useState("avgRating");
  const [showAllStudents, setShowAllStudents] = useState(true); */

  return (
    <>
      {/* <AllStudents funData={funData} funRatingAxis={funRatingAxis} /> */}
      {/* <StudentDetails students={students} /> */}
    </>
  );
}
export default Container;
