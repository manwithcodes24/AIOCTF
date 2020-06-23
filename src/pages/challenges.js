import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import NavBar from '../component/NavBar'

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





export default function Challenges( ) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
     const [key, setKey] = React.useState('');
     const [challenge_Id, setchallenege_id] = React.useState('');
    const [challenges,setchallenges]= React.useState([{}])
     const callback = (count) => {
          setOpen(count)

    
        }
        useEffect(()=>{
      fetch('http://localhost:8000/Challenge/', {
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



const handleSubmit = event => {
  // setchallenege_id(challengeId.value)
    {
      const data ={
        key : key,
      };
      debugger;
       fetch('http://localhost:8000/Challenge/checkResult?id='+event,{
        method :'POST',
        headers: {
          'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body :JSON.stringify(data)
       }).then(response => response.json(),
      )
       .then(data =>{
         debugger;
         M.toast({html:"Key Submitted Successfully"})
     })
       .catch((error)=>{
         debugger;
        M.toast({html:"Key not Submitted,Try later"})})

    }
    event.preventDefault();

  }

    return(
        <div>
       <div>
       <NavBar  name='Challenges' parentCallback={callback} description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." /> 
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

                 <form
                  onSubmit={()=>handleSubmit(list.id)} >
              <label for="key">Key</label>
              <input type="string" name="key" placeholder=""
              onChange={(event) => {setKey(event.target.value)}}/>
          <button type="submit">Submit key</button>
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