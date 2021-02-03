import { useParams } from "react-router-dom";
import { useState } from "react";
import Assignment from "../Components/Assignment";
import RatingCheckboxForm from "../Components/RatingCheckboxForm";

import allStudentsData from "../helperfunctions/helperFunctions";

const AssignmentDetails = () => {
  const { assignment } = useParams();

  const singleAssignmentData = allStudentsData.filter(
    (student) => student.assignment === assignment
  );
  console.log("assignmentdetauls");
  console.log(singleAssignmentData, "ass");
  const [showFunRating, setShowFunRating] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(true);

  const toggleShowFunRating = () => setShowFunRating((prev) => !prev);
  const toggleShowDifficultyRating = () =>
    setShowDifficultyRating((prev) => !prev);

  return (
    <div>
      <h1>AssignmentDetails of {assignment} </h1>
      <RatingCheckboxForm
        toggleShowFunRating={toggleShowFunRating}
        toggleShowDifficultyRating={toggleShowDifficultyRating}
        showDifficultyRating={showDifficultyRating}
        showFunRating={showFunRating}
      />
      <Assignment
        showFunRating={showFunRating}
        singleAssignmentData={singleAssignmentData}
        showDifficultyRating={showDifficultyRating}
      />
    </div>
  );
};

export default AssignmentDetails;
