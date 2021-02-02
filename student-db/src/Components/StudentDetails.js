import { useParams } from "react-router-dom";
import { useState } from "react";
import Student from "../Containers/Student";
// import studentDB from "../mock-data/students.json";
// import AllStudents from "./AllStudents";
import RatingCheckboxForm from "./RatingCheckboxForm";
import allStudentsData from "./helperFunctions";

const StudentDetails = () => {
  const { name } = useParams();

  const singleStudentData = allStudentsData.filter(
    (student) => student.name === name
  );

  const [showFunRating, setShowFunRating] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(true);

  const toggleShowFunRating = () => setShowFunRating((prev) => !prev);
  const toggleShowDifficultyRating = () =>
    setShowDifficultyRating((prev) => !prev);

  return (
    <div>
      <h1>StudentDetails of {name} </h1>

      <RatingCheckboxForm
        toggleShowFunRating={toggleShowFunRating}
        toggleShowDifficultyRating={toggleShowDifficultyRating}
        showDifficultyRating={showDifficultyRating}
        showFunRating={showFunRating}
      />

      <Student
        studentName={name}
        singleStudentData={singleStudentData}
        showFunRating={showFunRating}
        showDifficultyRating={showDifficultyRating}
      />
    </div>
  );
};

export default StudentDetails;
