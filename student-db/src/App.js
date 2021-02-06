import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import StudentNav from "./Navigation/StudentNav";
import StudentDetails from "./Containers/StudentDetails";
import AssignmentNav from "./Navigation/AssignmentNav";
import AssignmentDetails from "./Containers/AssignmentDetails";
import RatingCheckboxForm from "./Components/RatingCheckboxForm";
function App() {
  const [showBarChart, setShowBarChart] = useState(true);
  const [showChartBtn, setShowChartBtn] = useState(true);

  const [showFunRating, setShowFunRating] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(true);

  const toggleShowFunRating = () => setShowFunRating((prev) => !prev);
  const toggleShowDifficultyRating = () =>
    setShowDifficultyRating((prev) => !prev);

  const handleChartChange = () => {
    setShowBarChart((prev) => !prev);
  };
  const showChartBtnDisplay = (boolean) => {
    setShowChartBtn(boolean);
  };
  return (
    <div className={"app-container"}>
      <Router>
        <StudentNav />
        <div className={"displays"}>
          <AssignmentNav />
          <div className={"form-displays"}>
            <RatingCheckboxForm
              toggleShowFunRating={toggleShowFunRating}
              toggleShowDifficultyRating={toggleShowDifficultyRating}
              showDifficultyRating={showDifficultyRating}
              showFunRating={showFunRating}
            />

            {showChartBtn ? (
              <button className={"btn-linechart"} onClick={handleChartChange}>
                {showBarChart ? "Show Linechart" : "Show Barchart"}
              </button>
            ) : (
              <button disabled className={"btn-linechart"}>
                {" "}
                Unavailable{" "}
              </button>
            )}
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/students/Average" />
          </Route>

          <Route path="/students/:name">
            <StudentDetails
              showBarChart={showBarChart}
              showDifficultyRating={showDifficultyRating}
              showFunRating={showFunRating}
              showChartBtnDisplay={showChartBtnDisplay}
            />
          </Route>

          <Route path="/assignments/:assignment">
            <AssignmentDetails
              showChartBtnDisplay={showChartBtnDisplay}
              showDifficultyRating={showDifficultyRating}
              showFunRating={showFunRating}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
