import React from "react";
import '../assets/css/style.css';
import { TransitionGroup } from 'react-transition-group';
import Particles from 'react-particles-js'; 
import NavBar from '../component/NavBar'
// reactstrap components
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import particleComponent from '../component/particle.js';
function LoginPage() {
  const particlesOptions = {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": false,
          "value_area": 1025.8919341219544
        }
      },
      "color": {
        "value": "#2ca742"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#1d390d"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.352750653390415,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 7,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#d3eca5",
        "opacity": 0.3447335930860874,
        "width": 1.2827296486924182
      },
      "move": {
        "enable": true,
        "speed": 7,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 207.079689136843,
          "size": 16.241544246026905,
          "duration": 0.8932849335314796,
          "opacity": 0.8039564401783317,
          "speed": 3
        },
        "repulse": {
          "distance": 113.69080972218832,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    
      
    <div>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div>
  
  <Particles 
  className="particles"
  params={particlesOptions} />
    <div className="container" id="container">
      <div className="form-container sign-up-container" >
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
          <Link to='/signup'> <button>Sign Up</button></Link>
        </form>
      </div>
      <div className="form-container sign-in-container">
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
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start journey with us</p>
            <Link to='/signup'><button className="ghost" id="signUp">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
  );
}

export default LoginPage;
