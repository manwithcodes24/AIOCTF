import React ,{useState, useEffect}from "react";
import clsx from 'clsx';
import NavBar from '../component/NavBar';

import '../assets/css/style.css';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, List, ListItem, ListItemText} from '@material-ui/core';
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
      universitiesListItem:{
          backgroundColor:'#3b4046',
          marginBottom:'2%' ,
      },
}))

function Universities( ) {


const classes = useStyles();
const [open, setOpen] = React.useState(false);
const [status,setStatus] = React.useState(0);
const [universities,setuniversities]= React.useState([{}])
     
 useEffect(()=>{
      fetch(localStorage.urll +'/academics/Uni', {
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    }).then(response=>response.json())
    .then(response => {
        if (response[0]) {
          console.log(response)
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
      setuniversities(response)
    })
    .catch(error => (console.log(error.message)));

            })


     const callback = (count) => {
          setOpen(count)
          console.log(open)

    
        }
 
    return(

        <div>
       <div>
       <NavBar  name='Universities'  parentCallback={callback} description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." /> 
       </div> 
       <div  className={clsx(classes.content, {
        [classes.contentShift]: open
      }, classes.root)}>
      <Grid container spacing={5} >
      <Grid item xs={22} md={10}>
        <Typography variant="h6" className={classes.title}>
          Universities List :
        </Typography>
        <div className={classes.demo}>
          <List >
            {universities.map( (list,key) => (
<ListItem  key={list.id} className={classes.universitiesListItem} >
                <ListItemText
                >Name : {list.Name}</ListItemText><br/>
                <ListItemText>
                Location : {list.Location}</ListItemText><br/>
                <ListItemText>
                World Ranking : {list.World_Ranking} </ListItemText><br/>
                <ListItemText>
                Status : {list.status}</ListItemText><br/>
              </ListItem>
            )	)}
          </List>
        </div>
      </Grid>
</Grid>
       </div>
       </div>



    )
}











export default Universities;