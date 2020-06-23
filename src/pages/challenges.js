import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import NavBar from '../component/NavBar'

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';



import '../assets/css/style.css'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, List, ListItem, ListItemText} from '@material-ui/core'
import M from "materialize-css"
//import LoginPage from "./pages/LoginPage.js";
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
      challengesListItem:{
          backgroundColor:'#3b4046',
          marginBottom:'2%' ,
      },
}))





export default function challenges( ) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
     const [key, setKey] = React.useState('');
     const [challenge_Id, setchallenege_id] = React.useState('');
    const [challenges,setchallenges]= React.useState([{}])
       
useEffect(()=>{
      fetch(localStorage.urll +'/Challenge/', {
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    }).then(response=>response.json())
    .then(response => {
        if (response[0]) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;return Response({'success':'you have completed this challenge'})
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => {
      setchallenges(response)
    })
    .catch(error => (console.log(error.message)));

            })




const handle=(keyid)=>{
  {
  const data={
    key:key
  }
  console.log(keyid)
  console.log(data)
  debugger;
  fetch(localStorage.urll +'/Challenge/checkResult?id='+ keyid, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }).then(response=>response.json())
            .then(response => {
                if (response.success) {
                    console.log(response)
                    debugger
                    store.addNotification({
                        title: "Leader",
                        message: "Success",
                        type: "success",
                        insert: "top",
                        container: "top-left",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                }
                else {
                    console.log(response)

                    store.addNotification({
                        title: "Error",
                        message: "Key not submitted",
                        type: "danger",
                        insert: "top",
                        container: "top-left",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });

                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;

                })
            .catch(error => (
                console.log(error),
                store.addNotification({
                    title: " Failure",
                    message: "Internal Error",
                    type: "danger",
                    insert: "top",
                    container: "top-left",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                })
                ))
                
 //event.preventDefault();
    }
  }

    return(
        <div>
        <ReactNotification/>
       <div>
       </div> 
       <div  className={clsx(classes.content, {
        [classes.contentShift]: open
      }, classes.root)}>
      <Grid container spacing={5} >
      <Grid item xs={22} md={10}>
        <Typography variant="h6" className={classes.title}>
          Challenges
        </Typography>
        <div className={classes.demo}>
          

          <List >
         {challenges.map( list => (      
<ListItem  key={list.id} className={classes.challengesListItem} >
                <ListItemText
                 
                >Category : {list.Category}</ListItemText>
              
                <ListItemText
                 
                >Title : {list.Title}</ListItemText>
                <ListItemText
                 
                >Time Limitation{list.TimeLimitation}</ListItemText>
                <ListItemText
                 
                > Answer :{list.Answer}</ListItemText>

                
                <ListItemText>

                 <form >
              <label for="key">Key</label>
              <input type="string" name="key" placeholder=""
              onChange={(event) => {setKey(event.target.value)}}/>
          <button onClick={()=>handle(list.id)}>Submit key</button>
                </form>
                </ListItemText>
                
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