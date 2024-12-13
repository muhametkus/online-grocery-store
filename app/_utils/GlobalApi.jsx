const { default: axios } = require("axios");

const axiosClient=axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_URL}/api`
})

const getCategory=async()=>{
    try {
        const response = await axiosClient.get('/categories?populate=*')
        console.log('API Response:', response);
        return response;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return { data: { data: [] } };
    }
}

export default {
    getCategory
}