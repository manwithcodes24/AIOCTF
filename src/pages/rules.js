import React ,{useEffect, useState}from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import NavBar from '../component/NavBar'
import {Typography,ExpansionPanel ,ExpansionPanelDetails ,ExpansionPanelSummary , } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../assets/css/style.css'


const drawerWidth = 240;

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
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        
      },
      expansionPanel:{
        marginBottom:'20px',
        background: '#292e33',
        marginLeft:'20px',
        color:'white'
      },
}))

export default function Rules() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [rules,setrules] =React.useState([]);


 useEffect(()=>{
      fetch(localStorage.urll +'/rule', {
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    }).then(response=>response.json())
    .then(response => {
        if (response[0].id) {
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
      setrules(response)
    })
    .catch(error => (console.log(error.message)));

            })



const callback = (count) => {
         setOpen(count)
         console.log(open)
       }
const [expanded, setExpanded] = React.useState(false);

const handleChange = (panel) => (event, isExpanded) => {
         setExpanded(isExpanded ? panel : false);
       };
    return(
      <div>
      <NavBar  name='Rules'
      parentCallback={callback} description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." />
 {rules.map(rule => {
    return(
       <div  className={clsx(classes.content, {
        [classes.contentShift]: open
      }, classes.root)}>


      <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}>

        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}> <div className='rulesCounting'>1</div></Typography>
          <Typography className={classes.secondaryHeading}>{rule.Title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {rule.Discription}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     </div>
     )
    })
  }
     </div>
    )
}