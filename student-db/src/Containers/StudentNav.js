import studentDB from "../mock-data/students.json";
import { Link } from "react-router-dom";
const StudentNav = () => {
  const students = [...new Set(studentDB.map((student) => student.name))];
  // console.log(students, "students in StudentNav");

  return (
    <div>
      <h1>StudentNav</h1>
      {students.map((student) => (
        <Link to={`/students/${student}`} key={student}>{student}</Link>  
      ))}
      <Link to="/">All </Link>
    </div>
  );
};

export default StudentNav;
