export const SET_ISOVER = 'gameOfDrones/Game/SET_ISOVER';
export const SET_PLAYER_ONE = 'gameOfDrones/Game/SET_PLAYER_ONE';
export const SET_PLAYER_TWO = 'gameOfDrones/Game/SET_PLAYER_TWO';
export const CLEAR_PLAYERS = 'gameOfDrones/Game/CLEAR_PLAYERS';

export const setIsOver = value => ({ type: SET_ISOVER, payload: value });
export const setPlayerOne = value => ({ type: SET_PLAYER_ONE, payload: value });
export const setPlayerTwo = value => ({ type: SET_PLAYER_TWO, payload: value });
export const clearPlayers = () => ({ type: CLEAR_PLAYERS });
