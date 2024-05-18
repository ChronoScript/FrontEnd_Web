import React, { useEffect, useState } from "react";
import { createHouseOwner, getHouseOwner, updateHouseOwner } from "../Services/UserServices";
import {useHistory,useParams} from 'react-router-dom';


const HouseOwnerComponent=()=>{
   const [firstName,setFirstName]=useState('')
   const [lastName,setLastName]=useState('')
   const [dob,setDob]=useState('')
   const [gender,setGender]=useState('')
   const [weight,setWeight]=useState('')
   const [height,setHeight]=useState('')
   const [illnesses,setIllnesses]=useState('')
   const [currentMedicine,setCurrentMedicine]=useState('')
   const [allergies,setAllergies]=useState('')
   const [dietaryPreferences,setDietaryPreferences]=useState('')
const [errors,setErrors]=useState({
    firstName:'',
    lastName:'',
    dob:'',
    gender:'',
    weight:'',
    height:'',
    illnesses:'',
    currentMedicine:'',
    allergies:'',
    dietaryPreferences:''

})
  
   const history=useHistory();
   const{id}=useParams();

   useEffect(( )=>{
    if(id){
        getHouseOwner(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setDob(response.data.dob)
            setGender(response.data.gender)
            setWeight(response.data.weight)
            setHeight(response.data.height)
            setIllnesses(response.data.illnesses)
            setCurrentMedicine(response.data.currentMedicine)
            setAllergies(response.data.allergies)
            setDietaryPreferences(response.data.dietaryPreferences)

        }).catch(error=>{
            console.error(error);
        })
    }
   },[id])

function saveOrUpdateHouseOwner(e){
    e.preventDefault();
    if(validateForm()){
        const houseOwner={firstName,lastName,dob,gender,weight,height,illnesses,currentMedicine,allergies,dietaryPreferences}
        console.log(houseOwner)
        if(id){
            updateHouseOwner(id,houseOwner).then((response)=>{
                console.log(response.data);
                history.push('/ListHouseOwner');
            }).catch(error=>{
                console.error(error);
            })
        }else{
            createHouseOwner(houseOwner).then((response)=> {
                console.log(response.data);
                history.push('/ListHouseOwner');
             
            }).catch(error=>{
                console.error(error);
            })
        }
       
      
    }
   
}
function validateForm(){
    let valid=true;
    const errorsCopy={... errors}

    if(firstName.trim()){
        errorsCopy.firstName='';
    }else{
        errorsCopy.firstName='First name is required';
        valid=false;
    }
    
    if(lastName.trim()){
        errorsCopy.lastName='';
    }else{
        errorsCopy.lastName='Last name is required';
        valid=false;
    }
    
    if(dob.trim()){
        errorsCopy.dob='';
    }else{
        errorsCopy.dob='Date of Birth is required';
        valid=false;
    }

    
    if(gender.trim()){
        errorsCopy.gender='';
    }else{
        errorsCopy.gender='Gender is required';
        valid=false;
    }
    if(weight.trim()){
        errorsCopy.weight='';
    }else{
        errorsCopy.weight='Weight is required';
        valid=false;
    }
    if(height.trim()){
        errorsCopy.height='';
    }else{
        errorsCopy.height='Height is required';
        valid=false;
    }
    if(illnesses.trim()){
        errorsCopy.illnesses='';
    }else{
        errorsCopy.illnesses='Illnesses is required';
        valid=false;
    }
    if(currentMedicine.trim()){
        errorsCopy.currentMedicine='';
    }else{
        errorsCopy.currentMedicine='Current Medicine is required';
        valid=false;
    }
    if(allergies.trim()){
        errorsCopy.allergies='';
    }else{
        errorsCopy.allergies='Allergies is required';
        valid=false;
    }
    if(dietaryPreferences.trim()){
        errorsCopy.dietaryPreferences='';
    }else{
        errorsCopy.dietaryPreferences='Dietary Preferences is required';
        valid=false;
    }
    setErrors(errorsCopy);
    return valid;
}

function pageTitle(){
    if(id){
        return  <h2 className="text-center">HouseOwner Profile Update</h2>
    }
    else{
        return  <h2 className="text-center">HouseOwner Profile Creation</h2>
    }
}
    return(
        <div className="container"><br></br>
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
               {
                pageTitle()
               }
                    <div className="card-body">
                        <form>
                           
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input
                                type="text"
                                placeholder="Enter First Name"
                                name='firstName'
                                value={firstName}
                                className={`form-control ${ errors.firstName ? 'is-invalid':''}`}
                                onChange={(e)=>setFirstName(e.target.value)}
                                >

                                </input>
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div> }
                            </div>


                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input
                                type='text'
                                placeholder="Enter Last Name"
                                name='lastName'
                                value={lastName}
                                className={`form-control ${ errors.lastName ? 'is-invalid':''}`}
                                onChange={(e)=>setLastName(e.target.value)}
                                >

                                </input>
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div> }
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Date of Birth:</label>
                                <input
                                type='text'
                                placeholder="Enter Date of Birth"
                                name='dob'
                                value={dob}
                                className={`form-control ${ errors.dob ? 'is-invalid':''}`}
                                onChange={(e)=>setDob(e.target.value)}
                                >

                                </input>
                                {errors.dob && <div className="invalid-feedback">{errors.dob}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Gender:</label>
                                <input
                                type='text'
                                placeholder="Enter Gender"
                                name='gender'
                                value={gender}
                                className={`form-control ${ errors.gender ? 'is-invalid':''}`}
                                onChange={(e)=>setGender(e.target.value)}
                                >

                                </input>
                                {errors.gender && <div className="invalid-feedback">{errors.gender}</div> }
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Weight(in KG):</label>
                                <input
                                type='text'
                                placeholder="Enter Weight"
                                name='weight'
                                value={weight}
                                className={`form-control ${ errors.weight ? 'is-invalid':''}`}
                                onChange={(e)=>setWeight(e.target.value)}
                                >

                                </input>
                                {errors.weight && <div className="invalid-feedback">{errors.weight}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Height(in meter):</label>
                                <input
                                type='text'
                                placeholder="Enter Height"
                                name='height'
                                value={height}
                                className={`form-control ${ errors.height ? 'is-invalid':''}`}
                                onChange={(e)=>setHeight(e.target.value)}
                                >

                                </input>
                                {errors.height && <div className="invalid-feedback">{errors.height}</div> }
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Illnesses:</label>
                                <input
                                type='textarea'
                                placeholder="Enter Illnesses"
                                name='illnesses'
                                value={illnesses}
                                className={`form-control ${ errors.illnesses ? 'is-invalid':''}`}
                                onChange={(e)=>setIllnesses(e.target.value)}
                                >

                                </input>
                                {errors.illnesses && <div className="invalid-feedback">{errors.illnesses}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Current Medicines:</label>
                                <input
                                type='text'
                                placeholder="Enter Current Medicines"
                                name='currentMedicine'
                                value={currentMedicine}
                                className={`form-control ${ errors.currentMedicine ? 'is-invalid':''}`}
                                onChange={(e)=>setCurrentMedicine(e.target.value)}
                                >

                                </input>
                                {errors.currentMedicine && <div className="invalid-feedback">{errors.currentMedicine}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Allergies:</label>
                                <input
                                type='text'
                                placeholder="Enter Allergies"
                                name='allergies'
                                value={allergies}
                                className={`form-control ${ errors.allergies ? 'is-invalid':''}`}
                                onChange={(e)=>setAllergies(e.target.value)}
                                >

                                </input>
                                {errors.allergies && <div className="invalid-feedback">{errors.allergies}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Dietary Preferences:</label>
                                <input
                                type='text'
                                placeholder="Enter Dietary Preeferences"
                                name='dietaryPreferences'
                                value={dietaryPreferences}
                                className={`form-control ${ errors.dietaryPreferences ? 'is-invalid':''}`}
                                onChange={(e)=>setDietaryPreferences(e.target.value)}
                                >

                                </input>
                                {errors.dietaryPreferences && <div className="invalid-feedback">{errors.dietaryPreferences}</div> }
                            </div>

                            <button className="btn btn-success" onClick={saveOrUpdateHouseOwner}>Submit</button>

                        </form>

                    </div>

            </div>
        </div>

        </div>
    )
}

export default HouseOwnerComponent