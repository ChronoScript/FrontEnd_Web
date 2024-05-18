import axios from 'axios'

const USER_REG_REST_API_URL='http://localhost:8082/user/register';

const HOUSEOWNER_GET_REST_API_URL='http://localhost:8082/houseowner/get';
const HOUSEOWNER_GET_BYID_REST_API_URL='http://localhost:8082/houseowner/getById';
const HOUSEOWNER_UPDATE_REST_API_URL='http://localhost:8082/houseowner/update';
const HOUSEOWNER_DELETE_REST_API_URL='http://localhost:8082/houseowner/delete';
const HOUSEOWNER_REG_REST_API_URL='http://localhost:8082/houseowner/save';

const DIETITIAN_GET_REST_API_URL='http://localhost:8082/dietitian/get';
const DIETITIAN_GET_BYID_REST_API_URL='http://localhost:8082/dietitian/getById';
const DIETITIAN_UPDATE_REST_API_URL='http://localhost:8082/dietitian/update';
const DIETITIAN_DELETE_REST_API_URL='http://localhost:8082/dietitian/delete';
const DIETITIAN_REG_REST_API_URL='http://localhost:8082/dietitian/save';

export const createUser=(user)=>axios.post(USER_REG_REST_API_URL,user);

export const listHouseOwners=()=>{
    return axios.get(HOUSEOWNER_GET_REST_API_URL);
}

export const listDietitians=()=>{
    return axios.get(DIETITIAN_GET_REST_API_URL);
}

export const createHouseOwner=(houseOwner)=>axios.post(HOUSEOWNER_REG_REST_API_URL,houseOwner);

export const getHouseOwner=(houseOwnerId)=>axios.get(HOUSEOWNER_GET_BYID_REST_API_URL+'/'+houseOwnerId);

export const updateHouseOwner=(houseOwnerId, houseOwner)=>axios.put(HOUSEOWNER_UPDATE_REST_API_URL+'/'+houseOwnerId,houseOwner);

export const deleteHouseOwner=(houseOwnerId)=>axios.delete(HOUSEOWNER_DELETE_REST_API_URL+'/'+houseOwnerId);


export const createDietitian=(dietitian)=>axios.post(DIETITIAN_REG_REST_API_URL,dietitian);

export const getDietitian=(dietitianId)=>axios.get(DIETITIAN_GET_BYID_REST_API_URL+'/'+dietitianId);

export const updateDietitian=(dietitianId, dietitian)=>axios.put(DIETITIAN_UPDATE_REST_API_URL+'/'+dietitianId,dietitian);

export const deleteDietitian=(dietitianId)=>axios.delete(DIETITIAN_DELETE_REST_API_URL+'/'+dietitianId);