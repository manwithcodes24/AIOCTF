
import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom";


import { BrowserRouter,Switch, Route, Redirect, withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import LoginPage from "./pages/LoginPage.js";
import signupPage from './pages/signupPage.js';

import Announcement from './pages/announcement.js'

import Challenges from './pages/challenges.js'

import FeatureRequest from './pages/featureRequest.js'

import Rules from './pages/rules.js'

import Support from './pages/support.js'

import Universities from './pages/universities.js'

import Dashboard from "./pages/dashboard.js";


function App (){

return (
  <BrowserRouter>

    
     <Switch> 
     {!localStorage.getItem('token') ? ( 
    
     <div>
      <Route path='/login' component={ LoginPage } />
          
  <Route path='/sign' component={signupPage} />
  </div>) 
      :
      (
      <div>
        
<Route exact path="/rules" component={Rules} />

 <Route exact path="/announcement" component={Announcement} />

 <Route exact path="/challenges" component={ Challenges } />
  
 
  
  <Route exactpath="/dashboard" component={ Dashboard} />
  <Route exactpath="/support" component={ Support} />
  <Route exactpath="/universities" component={ Universities} />
  <Route exactpath="/featureReq" component={FeatureRequest} />
  
   </div>

        )
    }   


  
     <Redirect to="/login" />
       </Switch>
       
       </BrowserRouter>
       )
}
export default App;
     /*   
  <Route path='/sign' component={ ()=>
          <signupPage signupUser={this.props.signupUser} 
            />} />
 <PrivateRoute exact path="/rules" component={() =>
  <rules rules={this.props.rules}  />} />

 <PrivateRoute exact path="/announcement" component={() =>
  <announcement announcements={this.props.announcements}  />} />

 <PrivateRoute exact path="/challenges" component={() =>
  <challenges challenges={this.props.challenges}  />} />
  
  <PrivateRoute exact path="/universities" component={() =>
  <universities universities={this.props.universities}  />} />
  
  <PrivateRoute exactpath="/dashboard" component={()=>
    <dashboard total={this.props.total}/>} />
  

  <Redirect to="/login" />
      </Switch>
  </BrowserRouter>


}/*
  const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
      )} />
    );
  return(
    

    )
}
}

 
        
*/
        
    



