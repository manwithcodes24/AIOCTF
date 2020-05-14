import React from "react";
import '../assets/css/style.css';
import NavBar from '../component/NavBar'
import upperTitle from '../component/upperTitle'
import {Grid, Paper,Typography, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';





const drawerWidth = 240;
const contentWidth = 200 ; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor:'#292e33' ,
    color: '#c7c8ca' , 
    width:260
  },
  image: {
    width: 100,
    padding:4,
   
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  calcTextDes:{
      width:100,
          fontSize:'0.6em'

  },
  calcTextHeader:{
    width:100,
    display:'inline',
    fontSize:'1.5em'
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
  
}));

export default function Dashboard() {
  const classes = useStyles();
const [open, setOpen] = React.useState(false);
 const callback = (count) => {
      setOpen(count)
      console.log(open)

    }


  return ( 
    <div>
    <div>
      <NavBar  name='Dashboard' parentCallback={callback} description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." /> </div>
      
      
    <div  className={clsx(classes.content, {
          [classes.contentShift]: open
        }, classes.root)}>
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
      <Grid item>
      <Paper className={classes.paper}>
        <Grid container direction="row" spacing={0.5}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={5} sm container>
            <Grid item xs container direction="column" spacing={0.5}>
              <Grid item xs>
                <Typography className={classes.calcTextHeader} gutterBottom variant="subtitle1">
                160
                </Typography>
                <Typography className={classes.calcTextDes} variant="body2" gutterBottom>
                  Machines
                </Typography>
              
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
      </Grid>
      <Grid item>
      <Paper className={classes.paper}>
        <Grid container direction="row" spacing={0.5}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={5} sm container>
            <Grid item xs container direction="column" spacing={0.5}>
              <Grid item xs>
                <Typography className={classes.calcTextHeader} gutterBottom variant="subtitle1">
                160
                </Typography>
                <Typography className={classes.calcTextDes} variant="body2" gutterBottom>
                  Machines
                </Typography>
              
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
      </Grid>
      <Grid item>
      <Paper className={classes.paper}>
        <Grid container direction="row" spacing={0.5}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={5} sm container>
            <Grid item xs container direction="column" spacing={0.5}>
              <Grid item xs>
                <Typography className={classes.calcTextHeader} gutterBottom variant="subtitle1">
                160
                </Typography>
                <Typography className={classes.calcTextDes} variant="body2" gutterBottom>
                  Machines
                </Typography>
              
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
      </Grid>
      </Grid>
    </div>
    </div>
  );
}
