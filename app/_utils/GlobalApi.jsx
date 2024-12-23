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

const getSliders=()=>axiosClient.get(`/sliders?populate=*`).then(resp=>{
    return resp.data?.data;
})

const getCategoryList = async () => {
    try {
        const response = await axiosClient.get(`/categories?populate=*`);
        return response.data?.data;
    } catch (error) {
        console.error('Error fetching category list:', error);
        return [];
    }
}

const getAllProducts = async () => {
    try {
        const response = await axiosClient.get('/products?populate=*');
        return response.data?.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export default {
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts
}