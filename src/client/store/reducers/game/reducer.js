import * as fromActions from './actions';

export default (
   state = {
      isOver: false,
      playerOne: {},
      playerTwo: {}
   },
   action
) => {
   switch (action.type) {
      case fromActions.SET_ISOVER:
         return { ...state, isOver: action.payload };
      case fromActions.SET_PLAYER_ONE:
         return { ...state, playerOne: action.payload };
      case fromActions.SET_PLAYER_TWO:
         return { ...state, playerTwo: action.payload };
      case fromActions.CLEAR_PLAYERS:
         return { ...state, playerOne: {}, playerTwo: {} };
      default:
         return state;
   }
};
