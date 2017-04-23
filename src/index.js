import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { IndexRoute, Route, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './reducers/store';

import { createStore } from 'redux';
import reducers from './reducers'
const store = createStore(reducers);

import Mnavbar from './components/mnavbar';

const rootComponent =(
<Provider store={store}>
  <BrowserRouter>
    <div>
      <Mnavbar/>
      <Route path="/" component={App}>
        <IndexRoute component= {App} />
      </Route>
    </div>
  </BrowserRouter>
</Provider>
);

ReactDOM.render(
  rootComponent
  ,
  document.getElementById('root')
);
