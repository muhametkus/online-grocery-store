const { default: axios } = require("axios");

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api'
})

const getCategory=async()=>{
    const response=await axiosClient.get('/categories')
    return response.data
}

export default {
    getCategory
}