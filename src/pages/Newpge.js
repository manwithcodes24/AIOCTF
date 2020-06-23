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
 
<div className="container-fluid  ">

  <NavBar name='Challenge' description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." />
     
<div className="container  " >
  <div className="row d-flex justify-content-around"  >
   
    
<ReactNotification/>
      {all.map(list => {
    return(
<div className="col-lg-4 col-md-4 col-6 m-1 mt-2 mb-2 border border-light  text-light general">

    
      <h3 >
        
           Category : {list.Category}
           </h3>
           <h3>
         Title : {list.Title}
         </h3>
         
         <h3>
         Time Limitation{list.TimeLimitation}
         </h3>
         <div>
         <h3>Give Answer </h3>
        <input type="string" placeholder="your ans"
              onChange={(event) => {setans(event.target.value)}}/><br/>

<div className="d-flex justify-content-center">
      <button  className="btn btn-primary"
      onClick={()=>Accept(list.id)}>
                                             Submit Response  
      </button>
                    


      
                    
  </div>
  </div>
  </div>
    
     )
    })
  }
</div>
</div>
</div>
    )
}