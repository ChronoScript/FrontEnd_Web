import axios from 'axios'

const USER_REG_REST_API_URL='http://localhost:8082/user/register';

const HOUSEOWNER_GET_REST_API_URL='http://localhost:8082/houseowner/get';
const HOUSEOWNER_GET_BYID_REST_API_URL='http://localhost:8082/houseowner/getById';
const HOUSEOWNER_UPDATE_REST_API_URL='http://localhost:8082/houseowner/update';
const HOUSEOWNER_DELETE_REST_API_URL='http://localhost:8082/houseowner/delete';

const HOUSEOWNER_REG_REST_API_URL='http://localhost:8082/houseowner/save';


export const createUser=(user)=>axios.post(USER_REG_REST_API_URL,user);

export const listHouseOwners=()=>{
    return axios.get(HOUSEOWNER_GET_REST_API_URL);
}

export const createHouseOwner=(houseOwner)=>axios.post(HOUSEOWNER_REG_REST_API_URL,houseOwner);

export const getHouseOwner=(houseOwnerId)=>axios.get(HOUSEOWNER_GET_BYID_REST_API_URL+'/'+houseOwnerId);

export const updateHouseOwner=(houseOwnerId, houseOwner)=>axios.put(HOUSEOWNER_UPDATE_REST_API_URL+'/'+houseOwnerId,houseOwner);

export const deleteHouseOwner=(houseOwnerId)=>axios.delete(HOUSEOWNER_DELETE_REST_API_URL+'/'+houseOwnerId);