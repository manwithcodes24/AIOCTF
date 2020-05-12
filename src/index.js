
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit

// pages for this kit


import LoginPage from "./pages/LoginPage.js";
import signupPage from './pages/signupPage.js';
import access from './pages/access.js'
import announement from './pages/announcement.js'
import badges from './pages/badges.js'
import challenges from './pages/challenges.js'
import country from './pages/country.js'
import changeLog from './pages/changeLog.js'
import featureRequest from './pages/featureRequest.js'
import HOF from './pages/HOF.js'
import rules from './pages/rules.js'
import startingPoint from './pages/startingPoint.js'
import support from './pages/support.js'
import team from './pages/team.js'
import universities from './pages/universities.js'
import university from './pages/university.js'
import VIP from './pages/VIP.js'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        
        
        
       <Route path='/signup' component={signupPage} />
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <Route path="/access" component={access} />} />
        <Route path="/badges" component={badges} />} />

        <Route path="/announement" component={announement} />} />
        <Route path="/challenges" component={challenges} />} />
        <Route path="/country" component={country} />} />
        <Route path="/changeLog" component={changeLog} />} />
        <Route path="/featureRequest" component={featureRequest} />} />
        <Route path="/HOF" component={HOF} />} />
        <Route path="/rules" component={rules} />} />
        <Route path="/startingPoint" component={startingPoint} />} />
        <Route path="/support" component={support} />} />
        <Route path="/team" component={team} />} />
        <Route path="/universities" component={universities} />} />
        <Route path="/university" component={university} />} />
        <Route path="/VIP" component={VIP} />} />

        <Redirect from="/" to="/login" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
