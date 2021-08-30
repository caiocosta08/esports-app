import { SET_NEW_BET, SET_CURRENT_BET, SET_CURRENT_GAME } from '../actions/actionTypes';

const initialState = {
    newBet: {
        title: "",
        home: [],
        away: [],
        entry_value: 0,
        owner_id: "",
        bets_types_id: ""
    },
    currentBet: {},
    currentGame: ""
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_BET:
            return { ...state, newBet: action.payload.newBet };
            break;
        case SET_CURRENT_BET:
            return { ...state, currentBet: action.payload.currentBet };
            break;
        case SET_CURRENT_GAME:
            return { ...state, currentGame: action.payload.currentGame };
            break;
    }

    return state;
};