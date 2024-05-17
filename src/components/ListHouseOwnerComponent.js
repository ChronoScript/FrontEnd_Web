import React,{useEffect,useState} from "react";
import { listHouseOwners } from "../Services/UserServices";


const ListHouseOwnerComponent=()=>{
    const[HouseOwners,setHouseOwners]=useState([])

    useEffect(()=>{
        listHouseOwners().then((response)=>
        {
            setHouseOwners(response.data);
        }).catch(error=>{
            console.error(error);
        })
    },[])

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
                    </tr>
                </thead>
                <tbody>
                    {
                        HouseOwners.map(houseowner=>
                        <tr key={houseowner.id}>
                            <td>{houseowner.firstName}</td>
                            <td>{houseowner.lastName}</td>
                            <td>{houseowner.dob}</td>
                            <td>{houseowner.gender}</td>
                            <td>{houseowner.weight}</td>
                            <td>{houseowner.height}</td>
                            <td>{houseowner.dietaryPreferences}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )



 
  
       }
export default ListHouseOwnerComponent
