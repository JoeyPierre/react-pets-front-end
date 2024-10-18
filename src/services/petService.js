import axios from "axios";


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;
 
export const getPets = async ()=>{
    try {
        const response = await axios.get(BASE_URL)
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);  
    }
}
export const getPet = async (petId)=>{
    try {
        const response = await axios.get(`${BASE_URL}/${petId}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);  
    }
}