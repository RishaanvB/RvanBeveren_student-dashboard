import { useParams } from "react-router-dom";
import { useState } from "react";
import Student from "../Containers/Student";
import studentDB from "../mock-data/students.json";

const StudentDetails = (props) => {
  const { name } = useParams();
  console.log(props, "rendering props");
  console.log("studentDetails rendered");
  // console.log(props, "props in studentDetails");
  const singleStudentData = studentDB.filter(
    (student) => student.name === name
  );
  //   console.log(singleStudentData, `data of student ${name}`);

  const [studentData, setStudentData] = useState("");
  //   setStudentData(singleStudentData);

  return (
    <div>
      <h1>StudentDetails of {name} </h1>
      <Student studentName={name} singleStudentData={singleStudentData} />
    </div>
  );
};

export default StudentDetails;
