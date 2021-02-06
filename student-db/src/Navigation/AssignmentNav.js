import allStudentsData from "../helperfunctions/helperFunctions";

import { NavLink } from "react-router-dom";
const AssignmentNav = () => {
  const assignments = [
    ...new Set(allStudentsData.map((student) => student.assignment)),
  ];
  // console.log(students, "students in AssignmentNav");
  return (
    <div className={"ass-list"}>
      {assignments.map((assignment) => (
        <NavLink activeClassName={"active-link"} to={`/assignments/${assignment}`} key={assignment}>
          {assignment}
        </NavLink>
      ))}
    </div>
  );
};

export default AssignmentNav;
