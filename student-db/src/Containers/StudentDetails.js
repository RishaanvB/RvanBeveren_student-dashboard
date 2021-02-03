import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Student from "../Components/Student";
import RatingCheckboxForm from "../Components/RatingCheckboxForm";
import allStudentsData from "../helperfunctions/helperFunctions";
import Assignmentsform from "../Components/AssignmentsForm";
const StudentDetails = () => {
  let location = useLocation();
  // console.log(location);
  const { name, assignment } = useParams();
  // console.log(useParams());

  const singleStudentData = allStudentsData.filter(
    (student) => student.name === name
  );

  const [student, setStudent] = useState(singleStudentData);

  useEffect(
    () =>
      setStudent(allStudentsData.filter((student) => student.name === name)),
    [location, name]
  );

  const singleAssignmentData = allStudentsData.filter(
    (student) => student.assignment === assignment
  );

  const [showFunRating, setShowFunRating] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(true);

  const toggleShowFunRating = () => setShowFunRating((prev) => !prev);
  const toggleShowDifficultyRating = () =>
    setShowDifficultyRating((prev) => !prev);

  const [showBarChart, setShowBarChart] = useState(true);

  const handleChartChange = () => {
    console.log("handleChartChange linechart");
    setShowBarChart((prev) => !prev);
  };
  // console.log(showBarChart);
  return (
    <div>
      <button onClick={handleChartChange}>handleChartChange </button>

      <h1>StudentDetails of {name} </h1>

      <RatingCheckboxForm
        toggleShowFunRating={toggleShowFunRating}
        toggleShowDifficultyRating={toggleShowDifficultyRating}
        showDifficultyRating={showDifficultyRating}
        showFunRating={showFunRating}
      />

      <Student
        showBarChart={showBarChart}
        studentName={name}
        student={student}
        showFunRating={showFunRating}
        showDifficultyRating={showDifficultyRating}
      />
    </div>
  );
};

export default StudentDetails;
