import React from 'react';

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

export default function Rules(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);






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
      
 {props.rules.map( list => (

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
          <Typography className={classes.heading}> <div className='rulesCounting'> 1</div></Typography>
          <Typography className={classes.secondaryHeading}>{list.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {list.description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     </div>
     )
)}
     </div>
      
    )

}
