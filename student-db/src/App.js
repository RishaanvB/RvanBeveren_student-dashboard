import "./App.css";
import StateContainer from "./Containers/StateContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentNav from "./Containers/StudentNav";
import StudentDetails from "./Components/StudentDetails";

function App() {
  return (
    <div>
      <Router>
        <StudentNav />
        <Switch>
         
          <Route exact path="/">
            <StateContainer />
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
