import React from "react";
import UserServices from "../Services/UserServices";
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBCardFooter
  } from 'mdb-react-ui-kit';
  import {useState} from "react";
  import { useNavigate } from "react-router-dom";
 

  const LoginComponents=()=>{

    
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const [errors,setErrors]=useState
({
    
    email:'',
    password:''

})
   const navigator=useNavigate();

 function LoginUser(e)
 {
  e.preventDefault();
  if(validateForm()){
    const user={email,password}
    console.log(user)
    navigator('/dashboard')
  }

  
 }

 function validateForm(){
  let valid=true;
  const errorsCopy={... errors}
  if(email.trim()){
    errorsCopy.email='';

  }
  else{
      errorsCopy.email='email is required';
      valid=false;
  }

  if(password.trim()){
    errorsCopy.password='';

  }
  else{
      errorsCopy.password='Password is required';
      valid=false;
  }

  setErrors(errorsCopy);
  return valid;
  
 }




        return(
            <div>
 
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(/assets/background.png)',backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',width: '100vw',
height: '100vh'}}>
      <div className='mask gradient-custom-3'></div>
     
      <MDBCard className='m-5' style={{maxWidth: '600px'}} >
        <MDBCardBody className='px-5' >

        <form onSubmit={this.onSubmitLogin}>
          <h2 className="text-uppercase text-center mb-5">Login to NutriMate</h2>
         <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' name='email' type='email' className={`form-control ${ errors.email ?' is-invalid':''}`} onChange={this.onChangeHandler}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' name='password' type='password' onChange={this.onChangeHandler}/>
          
       
          <MDBBtn type="submit" className='mb-4 w-100 gradient-custom-4' size='lg' onClick={LoginUser}>Login</MDBBtn>
          <br></br>
          </form>
          
          <div className='d-flex flex-row justify-content-center mb-4'>
          
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
            </div>
        )
        
}
export default LoginComponents
