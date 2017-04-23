import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { IndexRoute, Route, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';

import { createStore } from 'redux';

import Mnavbar from './components/mnavbar';
import ContactPage from './containers/ContactPage';

const rootComponent =(
<Provider store={store}>
  <BrowserRouter>
    <div>
      <Mnavbar/>
      <Route path="/" component={App}>
        <IndexRoute component= {App} />
      </Route>
      <Route path="/contact" component={ContactPage}  />

    </div>
  </BrowserRouter>
</Provider>
);

ReactDOM.render(
  rootComponent
  ,
  document.getElementById('root')
);
