import { combineReducers } from 'redux'
import profile from './profile'
import prediction from './prediction'
import auth from './auth'

const psyTypeApp = combineReducers({
  auth,
  profile,
  prediction
})

export default psyTypeApp
