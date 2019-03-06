import * as fromActions from './actions';

export default (
   state = {
      list: []
   },
   action
) => {
   switch (action.type) {
      case fromActions.SET_LIST:
         return { ...state, list: action.payload };
      default:
         return state;
   }
};
