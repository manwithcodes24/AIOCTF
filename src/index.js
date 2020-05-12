/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
        <Route path="/access" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />
        <Route path="/dashboard" component={dashboard} />} />

        <Redirect from="/" to="/login" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
