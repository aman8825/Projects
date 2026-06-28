import axios from "axios"


const api=axios.create({
    //backendUrl
    baseURL:"http://localhost:4500"
});

export default api;