import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import '../assets/css/style.css';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Button, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom';
import {Grid , Paper , ButtonBase} from '@material-ui/core';
import '../assets/css/style.css'
import logo from '../assets/image/logo4.png'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'


import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';




const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
   
    display: 'flex',
    
    color: '#edf1e6',
  },
 
  appBar: {
    backgroundColor: '#343c41',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: '#343c41',
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {

    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {

    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: '6%',
    backgroundColor: '#111314',
    width: drawerWidth,
    color: '#edf1e6',
    whiteSpace: "nowrap",
    
    display: "block",
    overflow: "hidden"
  },
  navText:{
    margin:'10px',
    fontSize:'0.9rem',
    color:'darkGrey'
  },
  drawerHeader: {
    
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    //...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
   
    
   height:'auto',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop:'0',
    
  },
  navList:{
    
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'block',
    marginTop : '30%',
  },
  nested:{
    fontSize:'0.7em'
  },

  navText:{
  color:'darkGrey',fontSize:'0.8rem',marginTop:'1.5rem'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  expansionButtonCommon:{
    fullWidth:'true', 
    width:'100%' ,
    textAlign:'left',
    color: '#edf1e6',
    '&:hover' : {
      color: '#fff'
    }

  },
  expansionHeaderCommon:{
    color: '#edf1e6',
    fontSize:'0.7em',

    
  },
  AppTitle_section2:{
  
    
    
  },
  AppTitle_section1:{
  

    
    
  },
  titleContainer:{
    width: '100%',

  },
  titleRoot:{
   marginTop:'10%'
  }, 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
  titleDescription:{
    color:'#3f4447',
  },
  img:{
    height:'100px' ,
    
  },
}));

export default function NavBar(props) {
  const [openMain, setopenMain] = React.useState(false);
  const [openRanking, setopenRanking] = React.useState(false);
  const [openEducation, setopenEducation] = React.useState(false);
  const [openLabs, setopenLabs] = React.useState(false);
  const [openSocial, setopenSocial] = React.useState(false);
  const [openOther, setopenOther] = React.useState(false);

const logout=event=>{
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('payload')
  store.addNotification({
              title: "Logout Successfully",
              message: "Do come back",
              type: "warning",
              insert: "top",
              container: "top-left",
              animationIn: ["animated", "fadeIn"],
              animationOut: ["animated", "fadeOut"],
              dismiss: {
                duration: 4000,
                onScreen: true
              }
            })
  setTimeout(window.location="/",4000)
  

}

  const handleOther = () => {
    setopenOther(!openOther);
  }
  const handleMain = () => {
    setopenMain(!openMain);
  };
  const handleRanking = () => {
    setopenRanking(!openRanking);
  };
  const handleEducation = () => {
    setopenEducation(!openEducation);
  };
  const handleLabs = () => {
    setopenLabs(!openLabs);
  };
  const handleSocial = () => {
    setopenSocial(!openSocial);
  };
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 const History = useHistory()
  

  const handleDrawerClose = () => {
    setOpen(!open);
    console.log(open)
    //props.parentCallback(!open);
  };
  
  return (
    <div className={classes.root}>
      <ReactNotification/>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{flexDirection:'row'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            className={clsx(classes.menuButton, open )}
          >
            <MenuIcon />
          </IconButton>
{/* <<<<<<< HEAD*/}
          <Typography variant="h6" noWrap>
            {/* AIOC CTF   */}
  <Typography>AIOC</Typography>
          </Typography>
{/* =======

// >>>>>>> 97cdca3aa998140502e3639285ebd77e4c06ad23 */}
        </Toolbar>
        <div style={{justifyContent:'flex-end',flexDirection:'row',display:'flex',width:'100%' }} className={classes.root}>
          <div style={{width:'50%'}}></div>
          {/* temp fix to slide things  */}
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-tshirt"></i>
Swag Store
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-gift"></i>   Gift Cards
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-lightbulb"></i>  Feedback
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-star"></i> Testimonial
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
    Member Finder
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText} style={{color:' #00FF00'}}>
         
        </Grid>
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <Divider />
        <List className={classes.navList}>
          <ListItem button onClick={handleMain}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText> <Typography  classes={{
          root: classes.MuiTypographyRoot, 
        }}>Main</Typography>  </ListItemText>
        {openMain ? (<ExpandLess />) : (<ExpandMore />)}
      </ListItem>
      <Collapse in={openMain} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button  >
            <ListItemIcon>
              
            </ListItemIcon>
           <Link to='/dashboard' > Dashboard </Link>
            
          </ListItem>  
          <ListItem button 
          className={clsx(classes.nested, classes.expansionButtonCommon)} onClick={handleOther}>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText className={clsx(classes.nested)}> Other </ListItemText> 
          {openOther ? (<ExpandLess /> ): (<ExpandMore />)} 

        </ListItem> 
        <Collapse in={openOther} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        
        
        <ListItem button  > 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/rules'>Rules</Link>
        </ListItem>
  
        
        <ListItem button  > 
        <ListItemIcon>   
        </ListItemIcon>
        
        </ListItem>


      
        
        <ListItem button  > 
        <ListItemIcon>   
        </ListItemIcon>
       
        </ListItem>


      
        
        <ListItem button  > 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/featureReq'>Feature Request</Link><br/>
        
        </ListItem>


      
        
        <ListItem button  > 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/announcement'>Announcment</Link>
        </ListItem>

        <ListItem button  > 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/support'>Support</Link>
        </ListItem>


    

        </List>
        </Collapse>
        </List>
      </Collapse>


      <ListItem button onClick={handleEducation}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText className={clsx(classes.nested, classes.expansionHeaderCommon)}>Education</ListItemText>
        {openEducation ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openEducation} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button  >
            <ListItemIcon>
             
            </ListItemIcon>
            <Link to='/universities'>Universities</Link>
          </ListItem>
          
          
        </List>
      </Collapse>
      <ListItem button onClick={handleLabs}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
       
        <ListItemText className={clsx(classes.nested, classes.expansionHeaderCommon)}>Labs</ListItemText>
        {openLabs ? (<ExpandLess />) : (<ExpandMore />)}
      </ListItem>
      <Collapse in={openLabs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button  >
            <ListItemIcon>
              
            </ListItemIcon>
            
          </ListItem>
          

          <ListItem button  >
            <ListItemIcon>
              
            </ListItemIcon>
            
          </ListItem>

          <ListItem button  >
          <ListItemIcon>
            
          </ListItemIcon>
          <Link to='/challenges'>Challenges</Link>
        </ListItem>
        
          
        </List>
      </Collapse>
      
      <ListItem button onClick={handleSocial}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText className={clsx(classes.nested, 
          classes.expansionHeaderCommon)} >Social </ListItemText>
        {openSocial ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSocial} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button  >
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText className={clsx(classes.nested, classes.expansionButtonCommon)} >Private Messages </ListItemText>
          </ListItem>
          
          
          <ListItem button  >
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText className={clsx(classes.nested, classes.expansionButtonCommon)} primary="Twitter" />
        </ListItem>
        <ListItem button  >
        <ListItemIcon>
          
        </ListItemIcon>
       <ListItemText className={clsx(classes.nested, classes.expansionButtonCommon)} primary="Facebook" />
      </ListItem>

      <ListItem button  >
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText className={clsx(classes.nested, classes.expansionButtonCommon)} primary="Instagram" />
          </ListItem>
          <ListItem button  >
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText className={clsx(classes.nested, classes.expansionButtonCommon)} primary="Linkedin" />
          </ListItem>

        </List>
      </Collapse>
       <ListItem button onClick={logout}>
        
        Logout
        
      </ListItem>
      
        </List>

      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      <div className={classes.titleRoot}>
     
        <Grid container spacing={3}  justify="space-between">
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Logo" src={logo}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={30} sm container>
            <Grid item xs container direction="column" spacing={2}>
              
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  AIOC
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.titleDescription}>
                 {props.description}
                </Typography>
                
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">CTF <br/> <p>{props.name}</p></Typography>
            </Grid>
          </Grid>
        </Grid>
      <Divider/>
    </div>
      </div>
    </div>
  );
}