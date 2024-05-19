import React,{useEffect,useState} from "react";
import {deleteHouseOwner,listHouseOwners } from "../Services/UserServices";
import {useNavigate} from 'react-router-dom';


const ListHouseOwnerComponent=()=>{
    const[HouseOwners,setHouseOwners]=useState([])

    useEffect(()=>{
       getAllHouseOwners();
    },[])
    const navigator=useNavigate();

    function getAllHouseOwners(){
        listHouseOwners().then((response)=>
            {
                setHouseOwners(response.data);
            }).catch(error=>{
                console.error(error);
            })
    }
    function updateHouseOwner(id)
    {
        console.log(id);
        navigator(`/edit-houseowner/${id}`);
        
    }
    function removeHouseOwner(id)
    {
        console.log(id);
        deleteHouseOwner(id).then((response)=>{
                getAllHouseOwners();
        }).catch(error=>{
            console.error(error);
        })
    }

    return(
        <div className="container">
            <h2 className="text-center">List of HouseOwners</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>first Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Dietary Preferences</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        HouseOwners.map(houseowner=>
                        <tr key={houseowner.userId}>
                            <td>{houseowner.firstName}</td>
                            <td>{houseowner.lastName}</td>
                            <td>{houseowner.dob}</td>
                            <td>{houseowner.gender}</td>
                            <td>{houseowner.weight}</td>
                            <td>{houseowner.height}</td>
                            <td>{houseowner.dietaryPreferences}</td>
                            <td>
                            <button className="btn btn-info" onClick={()=>updateHouseOwner(houseowner.userId)}>Update</button>
                            <button className="btn btn-danger" onClick={()=>removeHouseOwner(houseowner.userId)}
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
export default ListHouseOwnerComponent
