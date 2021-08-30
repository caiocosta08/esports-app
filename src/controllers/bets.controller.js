import axios from '../services/axios.service';

export const getAll = async () => {
    try {
        let result = await axios.get('/bets/get-all');
        console.log({ result })
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
        return { error: error.response.data.error };
    }
}

export const getAllByUserId = async (user_id) => {
    try {
        let result = await axios.post('/bets/get-all-by-user-id', { user_id });
        console.log({ result })
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
        return { error: error.response.data.error };
    }
}

export const create = async (bet) => {
    try {
        let result = await axios.post('/bets/new', {
            title: bet?.title,
            home: bet?.home,
            away: bet?.away,
            entry_value: parseInt(bet?.entry_value),
            owner_id: bet?.owner_id,
            bets_types_id: 1
        });
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
        return { error: error.response.data.error };
    }
}

export const changeBetPlayerStatus = async (bet_id, user_id, status) => {
    try {
        console.log(bet_id, user_id, status)
        let result = await axios.put('/bet-players/update', { bet_id, user_id, status });
        console.log({ result: result?.data })
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
        return { error: error.response.data.error };
    }
}