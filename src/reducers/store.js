import { createStore } from 'redux';
import reducers from './index';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';

const isDev =false;
var useReduxDevTools=null;
if(isDev){
   useReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(reducers, 
    compose(
        applyMiddleware(thunk)
    )
);
export default store;