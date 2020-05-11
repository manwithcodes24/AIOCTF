import React from 'react';
import {Grid } from '@material-ui/core'
const upperTitle = () =>  {
    
    return(
        <div>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >  <Grid item>
      <div><h2> "Dashboard" </h2> 
      <h4> "hacjsjkjgdfsjkgdgf" </h4></div> 
        </Grid>
        <Grid item>
        <div><p>CTF</p></div> 
        <div><p>Dashboard</p></div> 
          </Grid>
      
      </Grid>
        </div>
    )
}
export default upperTitle ;