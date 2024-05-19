import React from "react";
import { createUser } from "../Services/UserServices";
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBCardFooter,MDBValidation,MDBValidationItem
  } from 'mdb-react-ui-kit';
  import {useState} from "react";
 import {useNavigate} from 'react-router-dom';


const UserComponents=()=>{

    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const [errors,setErrors]=useState
({
    firstName:'',
    lastName:'',
    email:'',
    password:''

})
   const navigator=useNavigate();

 function saveUser(e)
 {
  e.preventDefault();
  if(validateForm()){
    const user={email,password,firstName,lastName}
    console.log(user)
    createUser(user).then((response)=>{
      console.log(response.data);
      navigator('/dashboard');
    })
  }

  
 }

 function validateForm(){
  let valid=true;
  const errorsCopy={... errors}
  if(firstName.trim()){
    errorsCopy.firstName='';

  }
  else{
      errorsCopy.firstName='First name is required';
      valid=false;
  }

  if(lastName.trim()){
    errorsCopy.lastName='';

  }
  else{
      errorsCopy.lastName='Last name is required';
      valid=false;
  }
 
  if(email.trim()){
    errorsCopy.email='';

  }
  else{
      errorsCopy.email='Email is required';
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
      <br></br>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
     
       
          <h2 className="text-uppercase text-center mb-5">Create a NutriMate account</h2>

     
          <MDBInput wrapperClass='mb-4' label='Your First Name' size='lg'  name='firstName' type='text' className={`form-control ${ errors.firstName ?' is-invalid':''}`} onChange={(e)=>setfirstName(e.target.value)} />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          <MDBInput wrapperClass='mb-4' label='Your Last Name' size='lg' name='lastName' type='text' className={`form-control ${ errors.lastName ?' is-invalid':''}`} onChange={(e)=>setlastName(e.target.value)}/>
          {errors.lastNameName && <div className="invalid-feedback">{errors.lastName}</div>}
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' type='email' className={`form-control ${ errors.email ?' is-invalid':''}`} onChange={(e)=>setemail(e.target.value)}/>
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          <MDBInput wrapperClass='mb-4' label='Password' size='lg'  name='password' type='password' required onChange={(e)=>setpassword(e.target.value)} />
        

       
          <MDBBtn type="submit" className='mb-4 w-100 gradient-custom-4' size='lg' onClick={saveUser}>Register</MDBBtn>
        
          <div className='d-flex flex-row justify-content-center mb-4'>
          <span >Already have an account <a href="http://localhost:3000/Login" >Login</a> </span>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
            </div>
        )
       }
export default UserComponents
