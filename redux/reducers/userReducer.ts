import { Actions, UserStateType, UserActionTypes } from '../types'

const INITIAL_STATE: UserStateType = {
    userInfo: {},
}

const userReducer = (
    state = INITIAL_STATE,
    action: UserActionTypes
): UserStateType => {
    switch (action.type) {
        case Actions.SIGN_IN:
        case Actions.SIGN_UP:
            return {
                ...state,
            }
        default:
            return { ...state }
    }
}

export default userReducer
