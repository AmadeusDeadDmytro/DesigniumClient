import * as t from '../types'

const INITIAL_STATE: t.NotificationsStateType = {
    notification: null,
}

const userReducer = (
    state = INITIAL_STATE,
    action: t.NotificationsActionTypes
): t.NotificationsStateType => {
    switch (action.type) {
        case t.Actions.SHOW_NOTIFICATION:
            return {
                notification: action.payload,
            }
        case t.Actions.HIDE_NOTIFICATION:
            return {
                notification: null,
            }
        default:
            return { ...state }
    }
}

export default userReducer
