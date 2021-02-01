import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Student from "../Containers/Student";
// import studentDB from "../mock-data/students.json";
// import AllStudents from "./AllStudents";
import RatingCheckboxForm from "./RatingCheckboxForm";
import allStudentsData from "./helperFunctions";

const StudentDetails = (props) => {
  const { name } = useParams();
  console.log(name, "name in studentdetail");
  // console.log(allStudentsData);
  // console.log(props, "rendering props in StudentDetails");
  // console.log("studentDetails rendered");
  // console.log(props, "props in studentDetails");

  // console.log(allStudentsData, "allstudentdata");

  // console.log(getAvgRating(studentDB, "funRating"));

  const singleStudentData = allStudentsData.filter(
    (student) => student.name === name
  );
  console.log(singleStudentData, `data of student ${name}`);

  // const [studentData, setStudentData] = useState("");
  //   setStudentData(singleStudentData);
  // setStudentData(singleStudentData(allStudentsData));
  // setStudentData(allStudentsData.filter(student=> student.name === name))
  // console.log(studentData, "studentdata in studentdetails");

  const [showFunRating, setShowFunRating] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(true);

  const toggleShowFunRating = () => setShowFunRating((prev) => !prev);
  const toggleShowDifficultyRating = () =>
    setShowDifficultyRating((prev) => !prev);
  // console.log(studentData, "studentData state");
  // console.log(showFunRating, "showRating");
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
