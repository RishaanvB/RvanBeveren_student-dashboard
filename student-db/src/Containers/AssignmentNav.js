import allStudentsData from "../Components/helperFunctions";

import { Link } from "react-router-dom";
const AssignmentNav = () => {
  const assignments = [
    ...new Set(allStudentsData.map((student) => student.assignment)),
  ];
  // console.log(students, "students in AssignmentNav");
  return (
    <div>
      <h1>AssignmentNav</h1>
      {assignments.map((assignment) => (
        <Link to={`/assignments/${assignment}`} key={assignment}>
          {assignment}
        </Link>
      ))}
    </div>
  );
};

export default AssignmentNav;
