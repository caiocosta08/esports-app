import axios from '../services/axios.service';

export const getAll = async () => {
    try {
        let result = await axios.get('/games/get-all');
        console.log({ result })
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
        return { error: error.response.data.error };
    }
}