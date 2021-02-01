import allStudentsData from "../Components/helperFunctions"

import { Link } from "react-router-dom";
const StudentNav = () => {
  const students = [...new Set(allStudentsData.map((student) => student.name))];
  // console.log(students, "students in StudentNav");
  return (
    <div>
       

      <h1>StudentNav</h1>
      {students.map((student) => (
        <Link to={`/students/${student}`} key={student}>{student}</Link>  
      ))}
      
    </div>
  );
};

export default StudentNav;
