import { combineReducers } from 'redux';
import game from './game/reducer';
import statistics from './statistics/reducer';

export default combineReducers({ game, statistics });
