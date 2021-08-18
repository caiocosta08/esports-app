import axios from '../services/axios.service';

export const getAll = async () => {
    try {
        let result = await axios.get('/user/get-all');
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
    }
}

export const login = async (user) => {
    try {
        let results = await axios.post('/session/new', { email: user?.email, password: user?.password });
        console.log({ results })
        if (results) return results.data;
    } catch (error) {
        return { error: error.response.data.error };
    }
}

export const register = async (user) => {
    try {
        let results = await axios.post('/user/register', {
            email: user?.email,
            password: user?.password,
            name: user?.name,
            cpf: user?.cpf,
            phone: user?.phone,
            image_url: user?.image_url || "default..."
        });
        console.log({ results })
        if (results) return results.data;
    } catch (error) {
        return { error: error.response.data.error };
    }
}

export const searchByNickname = async (nickname) => {
    try {
        let results = await axios.post('/user/get-all-by-nickname', { nickname });
        // console.log({ results })
        if (results) return results.data;
    } catch (error) {
        return { error: error.response.data.error };
    }
}