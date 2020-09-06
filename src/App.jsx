import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import GreenTickWeekly from "./GreenTickWeekly";
import GlobalContests from "./GlobalContests";
import Practice from "./Practice";
import Resources from "./Resources";
import Login from "./Login";
import "./index.css";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contest" component={GreenTickWeekly} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/globalcompetitions" component={GlobalContests} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
