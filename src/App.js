import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter, Switch} from "react-router-dom";
import './App.scss';
import {Home, About, Users, TeacherLogin, Test, NoMatch} from "./pages/index";
import {TeacherRoute} from "./components/PrivateRoutes"
import {fakeAuth} from "./functions/auth";
import Header from "./components/header";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/test/:skillLevel" component={Test} />
            <Route path="/test" exact component={Test} />
            <Route path="/teacherlogin" component={TeacherLogin} />
            <TeacherRoute path="/users/" component={Users} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
