import { SET_USER, SET_LOADING_MODAL_VISIBLE } from './actionTypes';

export const setUser = user => ({
    type: SET_USER,
    payload: { user }
});
export const setLoadingModalVisible = loadingModalVisible => ({
    type: SET_LOADING_MODAL_VISIBLE,
    payload: { loadingModalVisible }
});