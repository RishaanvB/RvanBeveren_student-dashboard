import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import StudentNav from "./Containers/StudentNav";
import StudentDetails from "./Components/StudentDetails";

function App() {
  return (
    <div>
      <Router>
        <StudentNav />
        <Switch>
         
          <Route exact path="/">
          <Redirect to="/students/All" /> 
          </Route>

          <Route path="/students/:name">
            <StudentDetails />
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
