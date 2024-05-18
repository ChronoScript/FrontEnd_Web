import axios from 'axios'

const USER_REG_REST_API_URL='http://localhost:8082/user/register';

const HOUSEOWNER_GET_REST_API_URL='http://localhost:8082/houseowner/get';

const HOUSEOWNER_REG_REST_API_URL='http://localhost:8082/houseowner/save';


export const createUser=(user)=>axios.post(USER_REG_REST_API_URL,user);

export const listHouseOwners=()=>{
    return axios.get(HOUSEOWNER_GET_REST_API_URL);
}

export const createHouseOwner=(houseOwner)=>axios.post(HOUSEOWNER_REG_REST_API_URL,houseOwner);