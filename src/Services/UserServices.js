import axios from 'axios'

const USER_REG_REST_API_URL='http://localhost:8082/user/register/'

export const createUser=(user)=>axios.post(USER_REG_REST_API_URL,user);