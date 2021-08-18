import axios from '../services/axios.service';

export const getAll = async () => {
    try {
        let result = await axios.get('/bets/get-all');
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
    }
}
export const create = async (bet) => {
    try {
        let result = await axios.post('/bets/new', {
            entry_value: bet?.entry_value,
            owner_id: bet?.owner_id,
            bets_types_id: bet?.bet_types_id
        });
        if (result) return result.data;
    } catch (error) {
        console.log({ error })
    }
}