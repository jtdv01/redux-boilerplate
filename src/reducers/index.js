import { INCREMENT } from '../actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const initialState = {
  number: 1,
  form: formReducer
}

function IncrReducer(number = initialState.number, action) {
    /* Should return a value that is in the state.
      In this case, the key `number` is in state 
      so this reducer should return a number.
      If the case INCREMENT is called, then this reducer returns a new
      state with the addition of the action's payload
    */
    switch(action.type){
        case INCREMENT:
            return number + action.payload;
        default:
            return number;
    }
}

export default combineReducers({
    number: IncrReducer,
    form: formReducer
});