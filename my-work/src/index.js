import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk'
import { StrictMode } from 'react';
import { forbiddenWordsMiddleWare } from './redux/middleWare';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleWare,
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher)
render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </StrictMode>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
