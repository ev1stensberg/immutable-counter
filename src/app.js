import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import INCREASE_NUMBER from './core/reducers/INCREASE_NUMBER'
import thunk from 'redux-thunk'
import CounterNest from './components/CounterNest'

ReactDOM.render(
  <Provider store={createStore(INCREASE_NUMBER, applyMiddleware(thunk))}>
    <CounterNest />
  </Provider>,
  document.getElementById('root')
)
