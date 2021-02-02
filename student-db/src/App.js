import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import StudentNav from "./Containers/StudentNav";
import StudentDetails from "./Components/StudentDetails";
import AssignmentNav from "./Containers/AssignmentNav";
import AssignmentDetails from "./Components/AssignmentDetails";
function App() {
  return (
    <div>
      {/* <Container /> */}
      <Router>
        <StudentNav />
        <AssignmentNav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/students/All" />
          </Route>

          <Route path="/students/:name">
            <StudentDetails />
          </Route>

          <Route path="/assignments/:assignment">
            <AssignmentDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// graphscontainer
//          allstudents
//          inidividueel student
