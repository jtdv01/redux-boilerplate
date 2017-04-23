# Redux Counter
This is a quick starter boilerplate for React/Redux

A simple counter

#  Packages 
Gotachas:

- React Boostrap
- React Redux
- React Router
  - import { Provider } from 'react-redux' not just 'redux'!
- React Router Dom
  - import { BrowserRouter } from 'react-router'
    - THIS IS ALWAYS TRICKY! Browser Router has to be imported from react-router-dom

# Other gotchas

## Bootstrap

```js
// Components need to import the css

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';

```

## Web pack babel
- npm run eject
- Install babel loader
npm install babel-loader --save-dev

```
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }
  ],
},
```


## Redux DevTools
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en


When creating a store

```
import { createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';

const store = createStore(reducers, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;

```