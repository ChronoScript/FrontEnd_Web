import React from "react";
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
 
export const AboutUs = () => {
    return (
        // <div className="home" style={{backgroundImage: 'url(../assets/dashboard.jpeg)',backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',width: '100vw',
        // height: '100vh'}}>
            
        // </div>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(../assets/dashboard.jpeg)',backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',width: '100vw',
        height: '100vh'}}>
             <MDBCard className='m-5' position='left' style={{maxWidth: '600px'}}>
            
              <MDBCardBody>
                <MDBCardTitle>Welcome to NutriMate</MDBCardTitle>
                <MDBCardText>
                NutriMate is more than just an app and serves as your very own nutrition advisor, catering to your own requirements and tastes. NutriMate revolutionizes healthy living through a seamless integration of technology and professional advice. It does this by putting customized meal planning, one-on-one consultations with registered dietitians, and easy grocery ordering at your fingertips.
                </MDBCardText>
            
              </MDBCardBody>
            </MDBCard>
                  
                    
            </MDBContainer>
    );
};
 
