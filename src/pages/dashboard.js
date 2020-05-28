import React from "react";
import '../assets/css/style.css';
import NavBar from '../component/NavBar'
import upperTitle from '../component/upperTitle'
import {Grid, Paper,Typography, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
  ArgumentAxis,
  
} from '@devexpress/dx-react-chart-material-ui';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];


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
  paperGroup2: {
    padding: theme.spacing(2),
    backgroundColor:'#292e33' ,
    color: '#c7c8ca' , 
    
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


const generateData = (start, end, step ,gap) => {
  for (let i = start; i < end; i += step) {
    data.push({ splineValue: Math.sin(i) / i, lineValue: (((i / 15) ** 2.718) - 0.2), argument: i});
    
  }

  return data;
};



export default function Dashboard() {
  const classes = useStyles();
const [open, setOpen] = React.useState(false);
 const callback = (count) => {
      setOpen(count)
      console.log(open)

    }
const [chartData, setGraphData] = React.useState(generateData(39,50, 10))

  return ( 
    <div>
    
      <NavBar  name='Dashboard' parentCallback={callback} description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." /> 
      
      
    <div  className={clsx(classes.content, {
          [classes.contentShift]: open
        }, classes.root)}>
        <Grid
        container
        spacing={10}
        direction="column"
        justify="space-between"
        
      >
        <Grid
        item
        xs
        container
        direction="row"
        justify="space-between"
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
      <Grid

        item
        xs
        container
        direction="row"
        justify="space-between"
      >
  
      <Grid item>
      <Paper className={classes.paperGroup2}>
        <Grid container direction="row" spacing={0.5}>
         
          <Grid item xs={5} sm container>
            <Grid item xs container direction="column" spacing={0.5}>
              <Grid item xs>
              <LineChart
              width={600}
              height={300}
              data={data}
              margin={{
                top: 5, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
      </Grid>
      
      </Grid>
      
      </Grid>
    </div>
    </div>
  );
}
