import { createStore } from 'redux';
import reducers from './index';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';

const store = createStore(reducers, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;