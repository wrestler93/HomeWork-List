import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import TodoList from "./compnents/Home/TodoList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={TodoList} />
      </Switch>
    </Router>
  );
}

export default App;
