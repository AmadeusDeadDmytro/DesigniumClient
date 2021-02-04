import { combineReducers } from 'redux'
import userReducer from './userReducer'

const rootReducer = combineReducers({_user: userReducer})

export default rootReducer
