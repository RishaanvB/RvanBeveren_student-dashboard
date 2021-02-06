import allStudentsData from "../helperfunctions/helperFunctions";
import { NavLink } from "react-router-dom";
import { CgScrollV } from "react-icons/cg";
import { IconContext } from "react-icons";
const AssignmentNav = () => {
  const assignments = [
    ...new Set(allStudentsData.map((student) => student.assignment)),
  ];

  return (
    <div className={"assignment-container"}>
      <IconContext.Provider
        value={{ color: "black", className: "icon", size: "1.6rem" }}>
        <div>
          <CgScrollV />
        </div>
      </IconContext.Provider>

      <div className={"ass-list"}>
        {assignments.map((assignment) => (
          <NavLink
            activeClassName={"active-link"}
            to={`/assignments/${assignment}`}
            key={assignment}>
            {assignment}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AssignmentNav;
