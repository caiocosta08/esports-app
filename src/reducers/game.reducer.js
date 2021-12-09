import { SET_GAMES } from '../actions/actionTypes';

const initialState = {
    games: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_GAMES:
            return { ...state, games: action.payload.games };
            break;
    }

    return state;
};