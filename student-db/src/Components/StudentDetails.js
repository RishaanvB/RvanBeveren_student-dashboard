import { useParams } from "react-router-dom";
import { useState } from "react";
import Student from "../Containers/Student";
import studentDB from "../mock-data/students.json";
import AllStudents from "./AllStudents";
import RatingCheckboxForm from "./RatingCheckboxForm";

const StudentDetails = (props) => {
  const { name } = useParams();
  // console.log(props, "rendering props in StudentDetails");
  // console.log("studentDetails rendered");
  // console.log(props, "props in studentDetails");

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

  // console.log(getAvgRating(studentDB, "funRating"));

  const singleStudentData = studentDB.filter(
    (student) => student.name === name
  );
  //   console.log(singleStudentData, `data of student ${name}`);

  const [studentData, setStudentData] = useState("");
  //   setStudentData(singleStudentData);
  const [funData, setFunData] = useState(getAvgRating(studentDB, "funRating"));
  const [difficultyData, setDifficultyData] = useState(
    getAvgRating(studentDB, "difficultyRating")
  );

  const [showFunRating, setShowFunRating] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(true);

  const toggleShowFunRating = () => setShowFunRating((prev) => !prev);
  const toggleShowDifficultyRating = () =>
    setShowDifficultyRating((prev) => !prev);

  console.log(showFunRating, "showRating");
  return (
    <div>
      <h1>StudentDetails of {name} </h1>

      <RatingCheckboxForm
        toggleShowFunRating={toggleShowFunRating}
        toggleShowDifficultyRating={toggleShowDifficultyRating}
        showDifficultyRating={showDifficultyRating}
        showFunRating={showFunRating}
      />

      {name !== "All" ? (
        <Student
          studentName={name}
          singleStudentData={singleStudentData}
          showFunRating={showFunRating}
          showDifficultyRating={showDifficultyRating}
        />
      ) : (
        <AllStudents
          funData={funData}
          difficultyData={difficultyData}
          showFunRating={showFunRating}
          showDifficultyRating={showDifficultyRating}
        />
      )}
    </div>
  );
};

export default StudentDetails;
