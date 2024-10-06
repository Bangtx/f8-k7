import axios from '@/plugins/axios';


export const getMethod = async (endpoint) => {
    try {
        const {data} = await axios.get(endpoint)
        return data
    } catch (e) {
        console.error(e)
    }
}