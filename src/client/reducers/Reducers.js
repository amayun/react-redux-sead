import {combineReducers} from 'redux'
import {TEST} from '../actions/Actions'

const initialState = {
  first: 1
}

export default combineReducers({first})

function first(state = initialState.first, action) {
  if (action.type === TEST) return action.payload
  return state
}
