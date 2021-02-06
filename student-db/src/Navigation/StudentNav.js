import allStudentsData from "../helperfunctions/helperFunctions";
import logo from "../images/logo.png";
import { NavLink, Link } from "react-router-dom";
const StudentNav = () => {
  const students = [...new Set(allStudentsData.map((student) => student.name))];
  return (
    <header>
      <div className={"nav-bar"}>
        <Link to="/" className={"logo"}>
          <img src={logo} alt="winc logo" />
        </Link>
        <nav className={"nav-links"}>
          {students.map((student) => (
            <NavLink
              activeClassName="active-link"
              to={`/students/${student}`}
              key={student}>
              {student}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default StudentNav;
