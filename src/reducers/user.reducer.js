import { SET_USER, SET_LOADING_MODAL_VISIBLE, LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: {},
    loadingModalVisible: false
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload.user };
            break;
        case SET_LOADING_MODAL_VISIBLE:
            return { ...state, loadingModalVisible: action.payload.loadingModalVisible };
            break;
        case LOGOUT:
            return { ...initialState };
            break;
    }

    return state;
};