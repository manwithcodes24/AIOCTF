
import React ,{Component}from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit

// pages for this kit

import { BrowserRouter,Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from "./pages/LoginPage.js";
import signupPage from './pages/signupPage.js';

import access from './pages/access.js'
import announcement from './pages/announcement.js'
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
import dashboard from "./pages/dashboard.js";
import {loginUser, 
  logoutUser,signupUser, fetchannouncements,fetchrules,fetchchallenges,fetchuniversities } 
  from '../redux/ActionCreators';




const mapStateToProps = state => {
    return {
      announcements : state.announcements,
      challenges : state.challenges,
      universities:state.universities,
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchannouncements: () => dispatch(fetchannouncements()),
   fetchuniversities: () => dispatch(fetchuniversities()),
    fetchchallenges: () => dispatch(fetchchallenges()),
     fetchrules: () => dispatch(fetchrules()),
  
});

class App extends Component {
  componentDidMount() {
   
    this.props.fetchannouncements();
    this.props.fetchuniversities();
    this.props.fetchchallenges();
    this.props.fetchrules();

  }

render() {


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
    <BrowserRouter>

    <Switch>
    
        
        <Route path='/login' component={ ()=>
          <LoginPage loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}  />} />
          <Route path='/sign' component={ ()=>
          <signupPage signupUser={this.props.signupUser} 
            />} />
       
        //<Route path="/access" component={access } />
      //  <Route path="/badges" component={badges} />
        <Route path="/HOF" component={HOF} />

     //   <Route path="/announcement" component={announcement} />

 <PrivateRoute exact path="/rules" component={() =>
  <rules rules={this.props.rules}  />} />

 <PrivateRoute exact path="/announcement" component={() =>
  <announcement announcements={this.props.announcements}  />} />

 <PrivateRoute exact path="/challenges" component={() =>
  <challenges challenges={this.props.challenges}  />} />
  <PrivateRoute exact path="/universities" component={() =>
  <universities universities={this.props.universities}  />} />
  <Route path="/dashboard" component={dashboard} />
  <Route path="/featureRequest" component={featureRequest} />

  <Redirect to="/login" />
      </Switch>
  </BrowserRouter>

    )
}
}

 //<PrivateRoute exact path="/universities" component={() =>
  //<universities universities={this.props.universities}  />} />
     ///   <Route path="/challenges" component={challenges } />
        //<Route path="/country" component={country} />
        //<Route path="/changeLog" component={changeLog} />

        //<Route path="/rules" component={rules} />
        //<Route path="/startingPoint" component={startingPoint} />
        //<Route path="/support" component={support} />
        //<Route path="/team" component={team} />
     //   <Route path="/universities" component={universities} />
       // <Route path="/university" component={university} />
        //<Route path="/VIP" component={VIP} />

        

        
    



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));