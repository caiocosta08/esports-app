import { SET_NEW_BET } from '../actions/actionTypes';

const initialState = {
    newBet: {},
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_BET:
            return { ...state, newBet: action.payload.newBet };
            break;
    }

    return state;
};