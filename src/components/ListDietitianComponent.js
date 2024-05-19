import React,{useEffect,useState} from "react";
import {deleteDietitian,listDietitians } from "../Services/UserServices";
import {useNavigate} from 'react-router-dom';


const ListDietitianComponent=()=>{
    const[Dietitians,setDietitians]=useState([])

    useEffect(()=>{
       getAllDietitians();
    },[])
    const navigator=useNavigate();

    function getAllDietitians(){
        listDietitians().then((response)=>
            {
                setDietitians(response.data);
            }).catch(error=>{
                console.error(error);
            })
    }
    function updateDietitian(id)
    {
        console.log(id);
        navigator(`/edit-dietitian/${id}`);
        
    }
    function removeDietitian(id)
    {
        console.log(id);
        deleteDietitian(id).then((response)=>{
                getAllDietitians();
        }).catch(error=>{
            console.error(error);
        })
    }

    return(
        <div className="container">
            <h2 className="text-center">List of Dietitians</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Occupation</th>
                        <th>Contact No</th>
                        <th>Employer Name</th>
                        <th>Employment Duration</th>
                        <th>Certification</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        Dietitians.map(dietitian=>
                        <tr key={dietitian.userId}>
                            <td>{dietitian.firstName}</td>
                            <td>{dietitian.lastName}</td>
                            <td>{dietitian.occupation}</td>
                            <td>{dietitian.contact_no}</td>
                           <td>{dietitian.employer_name}</td>
                            <td>{dietitian.employment_duration}</td>
                            <td>{dietitian.certification}</td>
                            <td>
                            <button className="btn btn-info" onClick={()=>updateDietitian(dietitian.userId)}>Update</button>
                            <button className="btn btn-danger" onClick={()=>removeDietitian(dietitian.userId)}
                            style={{marginLeft:'10px'}}
                            >Delete</button>
                            </td>
                            
                        </tr>
                        )
                    } 

                </tbody>
            </table>
        </div>
    )



 
  
       }
export default ListDietitianComponent
