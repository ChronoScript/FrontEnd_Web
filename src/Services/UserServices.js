import axios from 'axios'

const USER_REG_REST_API_URL='http://localhost:8082/user/register/'


class UserServices{
    registerUser(data)
    {
        return axios.post(USER_REG_REST_API_URL,data);
    }
    
}
export default new UserServices();