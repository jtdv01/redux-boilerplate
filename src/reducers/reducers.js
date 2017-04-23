import { combineReducers } from 'redux';

const initialState = {
    number: 0
};

import { INCREMENT } from '../actions/actions';
function IncrementReducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {number: state.number + action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    number: IncrementReducer
})
export default reducers;