
import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom";


import { BrowserRouter,Switch, Route, Redirect, withRouter,useHistory } from 'react-router-dom';


//import { connect } from 'react-redux';
import LoginPage from "./pages/LoginPage.js";
import SignupPage from './pages/signupPage.js';

import Announcement from './pages/announcement.js'

//import NewChallenges from './pages/NewChallenges.js'
import NewPage from './pages/Newpge.js'
import FeatureRequest from './pages/featureRequest.js'

import Rules from './pages/rules.js'

import Support from './pages/support.js'

import Universities from './pages/universities.js'

import Dashboard from "./pages/dashboard.js";
import Profile from "./pages/profile.js";

function App (){

  useEffect(()=>{
    localStorage.setItem('urll',"https://192b94e97f1f.ngrok.io")
//localStorage.removeItem('url')
  })
    
  
//const History = useHistory()

return (
  <BrowserRouter>

     <Switch>

     {!localStorage.token ? (<div>
      <Route path='/login' component={ LoginPage } />

<Route path='/sign' component={SignupPage} />
 <Redirect to="/login" />
 </div>) : (<div>

<Route exact path="/rules" component={Rules} />

 <Route exact path="/announcement" component={Announcement} />

 <Route exact path="/challenges" component={ NewPage } />
  <Route exact path="/dashboard" component={Dashboard} />
  <Route exact path="/support" component={ Support} />
  <Route exact path="/universities" component={ Universities} />
  <Route exact path="/featureReq" component={FeatureRequest} />
  <Route exact path="/profile" component={ Profile} />
  <Redirect from="/login" to="/dashboard"/>
  <Redirect from="/" to="/dashboard"/>
  

  </div>)}

       </Switch>

       </BrowserRouter>
       )
}
export default App;




