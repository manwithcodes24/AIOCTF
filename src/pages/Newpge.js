import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import {Card,CardImg,CardImgOverlay,Nav,NavItem, 
  CardText,Button, CardBody,CardTitle,Breadcrumb, BreadcrumbItem,
Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';


import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import NavBar from '../component/NavBar'

  
export default function NewPage() {
   
const [all,setall] =React.useState([{}]);




const[ans,setans]= React.useState('')


const Accept=id=>{
  const info={
    key: ans
  }
  console.log(id)
  console.log(info)
  fetch(localStorage.urll +'/Challenge/checkResult?id='+ id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(info)
        }).then(response=>response.json())
            .then(response => {
                if (response.success) {
                    console.log(response)
                    store.addNotification({
                        title: "Check it",
                        message: response.success,
                        type: "success",
                        insert: "top",
                        container: "top-left",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                }
                else {
                    console.log(response)

                    store.addNotification({
                        title: "Check it",
                        message: response.error,
                        type: "danger",
                        insert: "top",
                        container: "top-left",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });

                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;

                })
            .catch(error => (
                console.log(error),
                store.addNotification({
                    title: " Failure",
                    message: "Internal Error",
                    type: "danger",
                    insert: "top",
                    container: "top-left",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                })
                ))
               

    }




useEffect(() => {
    fetch(localStorage.urll +'/Challenge/', {
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    }).then(response=>response.json())
      .then(response => {
        if (response) {
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
        setall(response)
      })
      .catch(error => (console.log(error.message)));

  })

    return(
 
<>

  <NavBar name='Challenge' description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." />
     
<div className="container-fluid  " >
  <div className="row d-flex justify-content-around"  >
   
    
<ReactNotification/>
      {all.map(list => {
    return(
<div className="col-lg-4 col-md-4 col-8  m-2 card" style={{"backgroundColor" :"#292e33"}} >

    
      <h6 className="mt-2">
        
           Category : {list.Category}
           </h6>
           <h6>
         Title : {list.Title}
         </h6>
         
         <h6 className="mt-2">
         Time Limitation{list.TimeLimitation}
         </h6>
         
         <h6 className="mt-2 ">Give Answer </h6>
        <input type="text" placeholder="your ans" className="text-light"
              onChange={(event) => {setans(event.target.value)}}/><br/>


      <button  className="btn mt-1 mb-2  text-light"
      onClick={()=>Accept(list.id)}>
                                             Submit 
      </button>
                    


      
                    
 
  
  </div>
    
     )
    })
  }
</div>
</div>
</>
    )
}