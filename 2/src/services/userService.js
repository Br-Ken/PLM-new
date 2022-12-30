import axios from "../axios"
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword});

}

/*const getAllproducts = (id) => {
    return axios.get('/api/get-all-products', {id: inputId})

}*/
export {
    handleLoginApi, 
    // getAllproducts
}