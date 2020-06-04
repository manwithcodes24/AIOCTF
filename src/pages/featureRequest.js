import React ,{useState,useEffect}from "react";
import clsx from 'clsx';
import NavBar from '../component/NavBar'

import '../assets/css/style.css'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, List, ListItem, ListItemText} from '@material-ui/core';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import particleComponent from '../component/particle.js';



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

const drawerWidth = 240;
const contentWidth = 200 ; 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
      },
    content: {
   
    
        height:'auto',
         flexGrow: 1,
         padding: theme.spacing(1),
         transition: theme.transitions.create('margin', {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen,
         }),
         marginTop:'0',
         
       },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        
        marginLeft: drawerWidth ,
      },
      gridListItem:{
        width:'100%'
      },
      demo: {
       marginLeft:'10%',
       width:'100%'
      },
      title: {
        marginLeft:'10%',
        fontSize : '1.5rem',
        color:'#fff'
      },
      announcementListItem:{
          backgroundColor:'#3b4046',
          marginBottom:'2%' ,
      },
}))

export default function FeatureRequest() {

 const [title, setTitle] = React.useState('');
 const [description, setDescription] = React.useState('') ;

 const [req, setreq] = React.useState([{}]) ;
   const classes =useStyles();
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


useEffect(()=>{
      fetch('http://localhost:8000/featureReq', {
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => {
      //error in fetching
     // setreq(response.data.map(list=>requests))
    })
    .catch(error => (console.log(error.message)));

            })




  const handleSubmit = event => {
      const request ={
        Title:title, 
        Description: description

      }

  fetch('http://localhost:8000/featureReq', {
        method: 'POST',
        headers: { 
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(request)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            

            console.log(response.success)
           
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => (console.log("logging err",error)))     
 
    event.preventDefault();
}


     

return(
       <div>
       <NavBar  name='Feature Request' description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." /> 
       
<div>
  
  <div>
  
  <div className="particles" params={particlesOptions} />
    
      <title>Make a Request</title>
        <form  onSubmit={handleSubmit}>
          
          
          <label for="title">Title</label>
          <input type="text" name="title" placeholder="title" 
           onChange={(event) => {setTitle(event.target.value)}}/>
           <label for="description">Description</label>
          <input type="text" name="description" 
           onChange={(event) => {setDescription(event.target.value)}} />
          <button>Make Request</button>
        </form>
     
  </div>
</div>
<div  className={clsx(classes.content,
        classes.root)}>
      <Grid container spacing={5} >
      <Grid item xs={22} md={10}>
        <div className={classes.demo}>
          <List >
            {req.map( (key,list) => (
<ListItem  key={list.id} className={classes.announcementListItem} >
{ list.userid=== localStorage.getItem('token') ? 
(
<div>
  <ListItemText>
                 
                 {list.Title}
   </ListItemText>
              
   <ListItemText>
                 
                 {list.Description}
    </ListItemText>
    </div>) : 

    (<span/> )}
               
                
              </ListItem>

              )
              )}
              
        
          </List>
        </div>
      </Grid>
</Grid>
       </div>



       </div> 


    )
}
