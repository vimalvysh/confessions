import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TopNavBar from "./Components/TopNavBar";
import Test from "./Components/Test";

import Index from "./Components/Index";
import RepotedMegs from "./Components/ReportedMesgs";

import Admin from "./Components/Admin/Admin";

class App extends Component {
  render() {
    return (
      <div className="main-div">
        <Router>
          <Route exact path="/" component={Index}></Route>
          {/* <Route
            exact
            path="/admin/reportedMesg"
            component={RepotedMegs}
          ></Route> */}
          <Route exact path="/admin" component={RepotedMegs}></Route>
          <Route exact path="/test" component={Test}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
