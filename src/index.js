import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { IndexRoute, Route, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'redux';
import store from './reducers/store';




ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
      <div>
        {/*<Heading />*/}
        <Route exact path="/" component={App}>
          <IndexRoute component={App}/>
        </Route>
      </div>
  </BrowserRouter>
</Provider>
  ,
  document.getElementById('root')
);
