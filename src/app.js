import React from 'react';
import { render } from 'react-dom';
import { List, Map } from 'immutable';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { TodoList } from './containers';

// init state tree
const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);
