import React from 'react';
import clsx from 'clsx';
import NavBar from '../component/NavBar'

export default function ChangeLog() {
const [open, setOpen] = React.useState(false);

const callback = (count) => {
        setOpen(count)
        console.log(open)
  
      }
    return(
       <div>
       <NavBar  name='Rules' parentCallback={callback} description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." /> 
       </div> 
    )
}