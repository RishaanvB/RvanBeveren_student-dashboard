import { useParams } from "react-router-dom";
import { useState } from "react";
import Student from "../Components/Student";
import RatingCheckboxForm from "../Components/RatingCheckboxForm";
import allStudentsData from "../helperfunctions/helperFunctions";

const StudentDetails = () => {
  const { name, assignment } = useParams();
  // console.log(useParams());

  const singleStudentData = allStudentsData.filter(
    (student) => student.name === name
  );

  const [showFunRating, setShowFunRating] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(true);

  const toggleShowFunRating = () => setShowFunRating((prev) => !prev);
  const toggleShowDifficultyRating = () =>
    setShowDifficultyRating((prev) => !prev);

  const [fun, setFun] = useState("funRating");
  const [showBarChart, setShowBarChart] = useState(true);

  const change = () => {
    console.log("change linechart");
    setShowBarChart((prev) => !prev);
  };
  console.log(showBarChart);
  return (
    <div>
      <button onClick={change}>Change </button>

      <h1>StudentDetails of {name} </h1>
      <RatingCheckboxForm
        toggleShowFunRating={toggleShowFunRating}
        toggleShowDifficultyRating={toggleShowDifficultyRating}
        showDifficultyRating={showDifficultyRating}
        showFunRating={showFunRating}
      />

      <Student
        showBarChart={showBarChart}
        fun={fun}
        studentName={name}
        singleStudentData={singleStudentData}
        showFunRating={showFunRating}
        showDifficultyRating={showDifficultyRating}
      />
    </div>
  );
};

export default StudentDetails;
