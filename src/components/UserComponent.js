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
    MDBCardFooter
  } from 'mdb-react-ui-kit';
  import {useState} from "react";
 // import {useNavigate} from 'react-router-dom';

  //class UserComponents extends React.Component{
  //   constructor(props){
  //     super(props)
  //     this.state={
  //        firstName:"",
  //        lastName:"",
  //        email:"",
  //        password:"",
  //        onRegister:props.onRegister
  //     };
  
  // };
const UserComponents=()=>{

    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

   // const navigator=useNavigate();

 function saveUser(e)
 {
  e.preventDefault();
  const user={email,password,firstName,lastName}
  console.log(user)
  createUser(user).then((response)=>{
    console.log(response.data);
    //navigator('/')
  })
 }

 // render(){
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
          <MDBInput wrapperClass='mb-4' label='Your First Name' size='lg'  name='firstName' type='text' onChange={(e)=>setfirstName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Last Name' size='lg' name='lastName' type='text' onChange={(e)=>setlastName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' type='email' onChange={(e)=>setemail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg'  name='password' type='password' onChange={(e)=>setpassword(e.target.value)}/>
          
       
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
//}
export default UserComponents
