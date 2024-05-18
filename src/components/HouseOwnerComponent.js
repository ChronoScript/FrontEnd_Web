import React, { useState } from "react";
import { createHouseOwner } from "../Services/UserServices";
import {useNavigate} from 'react-router-dom';

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

  

function saveHouseOwner(e){
    e.preventDefault();
    const houseOwner={firstName,lastName,dob,gender,weight,height,illnesses,currentMedicine,allergies,dietaryPreferences}
    console.log(houseOwner)
    createHouseOwner(houseOwner).then((response)=> {
        console.log(response.data);
     
    })
}

    return(
        <div className="container"><br></br>
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h2 className="text-center">HouseOwner Profile Creation</h2>
                    <div className="card-body">
                        <form>
                           
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input
                                type='text'
                                placeholder="Enter First Name"
                                name='firstName'
                                value={firstName}
                                className="form-control"
                                onChange={(e)=>setFirstName(e.target.value)}
                                >

                                </input>
                            </div>


                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input
                                type='text'
                                placeholder="Enter Last Name"
                                name='lastName'
                                value={lastName}
                                className="form-control"
                                onChange={(e)=>setLastName(e.target.value)}
                                >

                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Date of Birth:</label>
                                <input
                                type='text'
                                placeholder="Enter Date of Birth"
                                name='dob'
                                value={dob}
                                className="form-control"
                                onChange={(e)=>setDob(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Gender:</label>
                                <input
                                type='text'
                                placeholder="Enter Gender"
                                name='gender'
                                value={gender}
                                className="form-control"
                                onChange={(e)=>setGender(e.target.value)}
                                >

                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Weight(in KG):</label>
                                <input
                                type='text'
                                placeholder="Enter Weight"
                                name='weight'
                                value={weight}
                                className="form-control"
                                onChange={(e)=>setWeight(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Height(in meter):</label>
                                <input
                                type='text'
                                placeholder="Enter Height"
                                name='height'
                                value={height}
                                className="form-control"
                                onChange={(e)=>setHeight(e.target.value)}
                                >

                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Illnesses:</label>
                                <input
                                type='textarea'
                                placeholder="Enter Illnesses"
                                name='illnesses'
                                value={illnesses}
                                className="form-control"
                                onChange={(e)=>setIllnesses(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Current Medicines:</label>
                                <input
                                type='text'
                                placeholder="Enter Current Medicines"
                                name='currentMedicine'
                                value={currentMedicine}
                                className="form-control"
                                onChange={(e)=>setCurrentMedicine(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Allergies:</label>
                                <input
                                type='text'
                                placeholder="Enter Allergies"
                                name='allergies'
                                value={allergies}
                                className="form-control"
                                onChange={(e)=>setAllergies(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Dietary Preferences:</label>
                                <input
                                type='text'
                                placeholder="Enter Dietary Preeferences"
                                name='dietaryPreferences'
                                value={dietaryPreferences}
                                className="form-control"
                                onChange={(e)=>setDietaryPreferences(e.target.value)}
                                >

                                </input>
                            </div>

                            <button className="btn btn-success" onClick={saveHouseOwner}>Submit</button>

                        </form>

                    </div>

            </div>
        </div>

        </div>
    )
}

export default HouseOwnerComponent