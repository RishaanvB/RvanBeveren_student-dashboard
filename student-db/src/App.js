import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import StudentNav from "./Navigation/StudentNav";
import StudentDetails from "./Containers/StudentDetails";
import AssignmentNav from "./Navigation/AssignmentNav";
import AssignmentDetails from "./Containers/AssignmentDetails";
function App() {
  return (
    <div>
      {/* <Container /> */}
      <Router>
        <StudentNav />
        <AssignmentNav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/students/Average" />
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
