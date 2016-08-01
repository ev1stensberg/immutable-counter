import { INCREMENT } from '../actionTypes/default'
import { Map } from 'immutable'

const INCREASE_NUMBER = (state = Map({ number: 0}), action) => {
  switch(action.type) {
    case INCREMENT:
    return state.update('number', num => num + 1 )
    default:
    return state
  }
};

module.exports = INCREASE_NUMBER
