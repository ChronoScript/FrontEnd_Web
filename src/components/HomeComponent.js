import React from "react";
import UserServices from "../Services/UserServices";
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,MDBCardText,
    MDBInput,
    MDBCheckbox,
    MDBCardFooter,Ripple,initMDB
  } from 'mdb-react-ui-kit';
  import {useState} from "react";
 


  class HomeComponents extends React.Component{
    constructor(props){
      super(props)
      
  
  };

  render(){
        return(
            <div>
 
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(/assets/background.png)',backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',width: '100vw',
height: '100vh'}}>
     <MDBCard className='m-5' position='left' style={{maxWidth: '600px'}}>
      <MDBCardImage  className='photo' src='assets/logo.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>NutriMate</MDBCardTitle>
        <MDBCardText>
        NutriMate is more than just an app and serves as your very own nutrition advisor, catering to your own requirements and tastes. NutriMate revolutionizes healthy living through a seamless integration of technology and professional advice. It does this by putting customized meal planning, one-on-one consultations with registered dietitians, and easy grocery ordering at your fingertips.
        </MDBCardText>
    
      </MDBCardBody>
    </MDBCard>
    
     
    
    </MDBContainer>
            </div>
        )
        }
}
export default HomeComponents
