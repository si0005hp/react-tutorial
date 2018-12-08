import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './containers/Game'
import gameReducer from './reducers/Game'
import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


const store = createGameStore()

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)

function createGameStore() {
  return createStore(
    gameReducer,
    applyMiddleware(thunk)
  )
}