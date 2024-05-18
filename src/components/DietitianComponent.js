import React, { useEffect, useState } from "react";
import { createDietitian, getDietitian, updateDietitian } from "../Services/UserServices";
import {useHistory,useParams} from 'react-router-dom';


const DietitianComponent=()=>{
   const [firstName,setFirstName]=useState('')
   const [lastName,setLastName]=useState('')
   const [occupation,setOccupation]=useState('')
   const [contact_no,setContact_no]=useState('')
   const [bio,setBio]=useState('')
   const [employer_name,setEmployer_name]=useState('')
   const [employment_duration,setEmployment_duration]=useState('')
   const [responsibilities,setResponsibilities]=useState('')
   const [degree,setDegree]=useState('')
   const [institution,setInstitution]=useState('')
   const [graduation_year,setGraduation_year]=useState('')
   const [awards,setAwards]=useState('')
   const [certification,setCertification]=useState('')
   const [issued_organization,setIssued_organization]=useState('')
   const [duration,setDuration]=useState('')
   const [expiration_date,setExpiration_date]=useState('')
   const [additional_qualifications,setAdditional_qualifications]=useState('')

const [errors,setErrors]=useState({
    firstName:'',
    lastName:'',
    occupation:'',
    contact_no:'',
    bio:'',
    employer_name:'',
    employment_duration:'',
    responsibilities:'',
    degree:'',
    institution:'',
    graduation_year:'',
    awards:'',
    certification:'',
    issued_organization:'',
    duration:'',
    expiration_date:'',
    additional_qualifications:''


})
  
   const history=useHistory();
   const{id}=useParams();

   useEffect(( )=>{
    if(id){
        getDietitian(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setOccupation(response.data.occupation)
            setContact_no(response.data.contact_no)
            setBio(response.data.bio)
            setEmployer_name(response.data.employer_name)
            setEmployment_duration(response.data.employment_duration)
            setResponsibilities(response.data.responsibilities)
            setDegree(response.data.degree)
            setInstitution(response.data.institution)
            setGraduation_year(response.data.graduation_year)
            setAwards(response.data.awards)
            setCertification(response.data.certification)
            setIssued_organization(response.data.issued_organization)
            setDuration(response.data.duration)
            setExpiration_date(response.data.expiration_date)
            setAdditional_qualifications(response.data.additional_qualifications)

        }).catch(error=>{
            console.error(error);
        })
    }
   },[id])

function saveOrUpdateDietitian(e){
    e.preventDefault();
    if(validateForm()){
        const dietitian={firstName,lastName,occupation,contact_no,bio,employer_name,employment_duration,responsibilities,degree,institution,graduation_year,awards,certification,issued_organization,duration,expiration_date,additional_qualifications}
        console.log(dietitian)
        if(id){
            updateDietitian(id,dietitian).then((response)=>{
                console.log(response.data);
                history.push('/ListDietitian');
            }).catch(error=>{
                console.error(error);
            })
        }else{
            createDietitian(dietitian).then((response)=> {
                console.log(response.data);
                history.push('/ListDietitian');
             
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
    
    if(occupation.trim()){
        errorsCopy.occupation='';
    }else{
        errorsCopy.occupation='Occupation is required';
        valid=false;
    }

    
    if(contact_no.trim()){
        errorsCopy.contact_no='';
    }else{
        errorsCopy.contact_no='Contact No is required';
        valid=false;
    }
    if(bio.trim()){
        errorsCopy.bio='';
    }else{
        errorsCopy.bio='Bio is required';
        valid=false;
    }
    if(employer_name.trim()){
        errorsCopy.employer_name='';
    }else{
        errorsCopy.employer_name='Employer is required';
        valid=false;
    }
    if(employment_duration.trim()){
        errorsCopy.employment_duration='';
    }else{
        errorsCopy.employment_duration='Employment Duration is required';
        valid=false;
    }
    if(responsibilities.trim()){
        errorsCopy.responsibilities='';
    }else{
        errorsCopy.responsibilities='Responsibilities is required';
        valid=false;
    }
    if(degree.trim()){
        errorsCopy.degree='';
    }else{
        errorsCopy.degree='Degree is required';
        valid=false;
    }
    if(certification.trim()){
        errorsCopy.certification='';
    }else{
        errorsCopy.certification='certification is required';
        valid=false;
    }
    setErrors(errorsCopy);
    return valid;
}

function pageTitle(){
    if(id){
        return  <h2 className="text-center">Dietitian Profile Update</h2>
    }
    else{
        return  <h2 className="text-center">Dietitian Profile Creation</h2>
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
                                <label className="form-label">Occupation:</label>
                                <input
                                type='text'
                                placeholder="Enter Occupation"
                                name='occupation'
                                value={occupation}
                                className={`form-control ${ errors.occupation ? 'is-invalid':''}`}
                                onChange={(e)=>setOccupation(e.target.value)}
                                >

                                </input>
                                {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Contact No:</label>
                                <input
                                type='text'
                                placeholder="Enter Contact No"
                                name='contact_no'
                                value={contact_no}
                                className={`form-control ${ errors.contact_no ? 'is-invalid':''}`}
                                onChange={(e)=>setContact_no(e.target.value)}
                                >

                                </input>
                                {errors.contact_no && <div className="invalid-feedback">{errors.contact_no
                                }</div> }
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Bio:</label>
                                <input
                                type='text'
                                placeholder="Enter Bio"
                                name='bio'
                                value={bio}
                                className={`form-control ${ errors.bio ? 'is-invalid':''}`}
                                onChange={(e)=>setBio(e.target.value)}
                                >

                                </input>
                                {errors.bio && <div className="invalid-feedback">{errors.bio}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Employer Name:</label>
                                <input
                                type='text'
                                placeholder="Enter Employer"
                                name='employer_name'
                                value={employer_name}
                                className={`form-control ${ errors.employer_name ? 'is-invalid':''}`}
                                onChange={(e)=>setEmployer_name(e.target.value)}
                                >

                                </input>
                                {errors.employer_name && <div className="invalid-feedback">{errors.employer_name}</div> }
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Employment Duration:</label>
                                <input
                                type='textarea'
                                placeholder="Enter Employment Duration"
                                name='employment_durtion'
                                value={employment_duration}
                                className={`form-control ${ errors.employment_duration ? 'is-invalid':''}`}
                                onChange={(e)=>setEmployment_duration(e.target.value)}
                                >

                                </input>
                                {errors.employment_duration && <div className="invalid-feedback">{errors.employment_duration}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Responsibilities:</label>
                                <input
                                type='text'
                                placeholder="Enter Responsibilities"
                                name='responsibilities'
                                value={responsibilities}
                                className={`form-control ${ errors.responsibilities ? 'is-invalid':''}`}
                                onChange={(e)=>setResponsibilities(e.target.value)}
                                >

                                </input>
                                {errors.responsibilities && <div className="invalid-feedback">{errors.responsibilities}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Degree:</label>
                                <input
                                type='text'
                                placeholder="Enter Degree"
                                name='degree'
                                value={degree}
                                className={`form-control ${ errors.degree ? 'is-invalid':''}`}
                                onChange={(e)=>setDegree(e.target.value)}
                                >

                                </input>
                                {errors.degree && <div className="invalid-feedback">{errors.degree}</div> }
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Institution:</label>
                                <input
                                type='text'
                                placeholder="Enter Institution"
                                name='institution'
                                value={institution}
                                className='form-control'
                                onChange={(e)=>setInstitution(e.target.value)}
                                >

                                </input>
                            
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Graduation Year:</label>
                                <input
                                type='text'
                                placeholder="Enter Graduation Year"
                                name='graduation_year'
                                value={graduation_year}
                                className='form-control'
                                onChange={(e)=>setGraduation_year(e.target.value)}
                                ></input>
                            
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Awards:</label>
                                <input
                                type='text'
                                placeholder="Enter Awards"
                                name='awards'
                                value={awards}
                                className='form-control'
                                onChange={(e)=>setAwards(e.target.value)}
                                ></input>
                            
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Certification:</label>
                                <input
                                type='text'
                                placeholder="Enter Certification"
                                name='certification'
                                value={certification}
                                className={`form-control ${ errors.certification ? 'is-invalid':''}`}
                                onChange={(e)=>setCertification(e.target.value)}
                                >

                                </input>
                                {errors.certification && <div className="invalid-feedback">{errors.certification}</div> }
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Issued Organization:</label>
                                <input
                                type='text'
                                placeholder="Enter Issued Organization"
                                name='issued_organization'
                                value={issued_organization}
                                className='form-control'
                                onChange={(e)=>setIssued_organization(e.target.value)}
                                ></input>
                            
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Duration:</label>
                                <input
                                type='text'
                                placeholder="Enter Duration"
                                name='duration'
                                value={duration}
                                className='form-control'
                                onChange={(e)=>setDuration(e.target.value)}
                                ></input>
                            
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Expiration Date:</label>
                                <input
                                type='text'
                                placeholder="Enter Expiration Date:"
                                name='expiration_date'
                                value={expiration_date}
                                className='form-control'
                                onChange={(e)=>setExpiration_date(e.target.value)}
                                ></input>
                            
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Additional Qualifications:</label>
                                <input
                                type='text'
                                placeholder="Enter Additional Qualifications"
                                name='additional_qualifications'
                                value={additional_qualifications}
                                className='form-control'
                                onChange={(e)=>setAdditional_qualifications(e.target.value)}
                                ></input>
                            
                            </div>

                            <button className="btn btn-success" onClick={saveOrUpdateDietitian}>Submit</button>

                        </form>

                    </div>

            </div>
        </div>

        </div>
    )
}

export default DietitianComponent