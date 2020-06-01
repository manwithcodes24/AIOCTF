import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import NavBar from '../component/NavBar'



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
      
}))




export default function Responsive(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const callback = (count) => {
         setOpen(count)
         console.log(open)
       }

    return(
        
      <div>
      <NavBar  name={props.name} parentCallback={callback} description={props.description} /> 
      
       <div  className={clsx(classes.content, {
        [classes.contentShift]: open
      }, classes.root)}>



     </div>
     </div>
      
    )

}
