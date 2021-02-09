import { combineReducers } from 'redux'
import userReducer from './userReducer'
import notificationReducer from './notificationReducer'

const rootReducer = combineReducers({
    _user: userReducer,
    _notifications: notificationReducer,
})

export default rootReducer
