import { SET_USER, SET_LOADING_MODAL_VISIBLE, SET_NEW_BET, SET_CURRENT_BET, LOGOUT, SET_CURRENT_GAME, SET_GAMES } from './actionTypes';

export const setUser = user => ({
    type: SET_USER,
    payload: { user }
});
export const setLoadingModalVisible = loadingModalVisible => ({
    type: SET_LOADING_MODAL_VISIBLE,
    payload: { loadingModalVisible }
});
export const setNewBet = newBet => ({
    type: SET_NEW_BET,
    payload: { newBet }
});
export const setCurrentBet = currentBet => ({
    type: SET_CURRENT_BET,
    payload: { currentBet }
});
export const setCurrentGame = currentGame => ({
    type: SET_CURRENT_GAME,
    payload: { currentGame }
});
export const setGames = games => ({
    type: SET_GAMES,
    payload: { games }
});
export const logout = () => ({
    type: LOGOUT,
    payload: {}
});