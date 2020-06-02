import React ,{useState}from "react";

import clsx from 'clsx';
import NavBar from '../component/NavBar'

 function announcement(props) {





const [title, setTitle] = React.useState('');
const [description, setDescription] = React.useState('');
const [announcement,setAnnouncement] = React.useState([]);
  


fetch('http://localhost:8000/announcements',{
  method:'Get',
  headers:{
    'Content-Type' : 'application/json',
    Authorization : `Token $(this.props.token)`   
  },
}).
then(
res=>{
  console.log(res)
       const data = res.data
       if(res.status===200){
       setAnnouncement(res.data)
       // console.log(status)

      
       }
       else
       {
        window.location.href="/signup"
       }

}

)
.catch(err=>console.log(err))

    return(
       <div>



       <NavBar  name='Announcement'
        description="is an online platform allowing you to test and advance your
         skills in cyber security. Use it responsibly and don't hack your fellow members..." /> 
       </div> 
    )
}

export default  announcement;