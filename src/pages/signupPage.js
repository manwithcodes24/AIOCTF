import React from "react";
import '../assets/css/style.css';
import { TransitionGroup } from 'react-transition-group';
import Particles from 'react-particles-js'; 
// reactstrap components
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import particleComponent from '../component/particle.js'
function signupPage() {
  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  };

  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  // React.useEffect(() => {
  //   document.body.classList.add("login-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("login-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // });
  return (
    
      
    <div>
  <title>SignUp and Login</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div>
  <Particles 
  className="particles"
  params={particlesOptions} />
    <div className="container" id="container">
      <div className="form-container sign-in-container" >
        <form action>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fa fa-facebook" /></a>
            <a href="#" className="social"><i className="fa fa-google" /></a>
            <a href="#" className="social"><i className="fa fa-linkedin" /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fa fa-facebook" /></a>
            <a href="#" className="social"><i className="fa fa-google" /></a>
            <a href="#" className="social"><i className="fa fa-linkedin" /></a>
          </div>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <Link to='/login'><button className="ghost" id="signIn">Sign In</button></Link>
          </div>
          <div className="overlay-panel overlay-left">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start journey with us</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
  );
}

export default signupPage;
