import { Actions, UserActionTypes, UserStateType } from '../types'

const INITIAL_STATE: UserStateType = {
    userInfo: {},
    loading: false,
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
                loading: true,
            }
        case Actions.STOP_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return { ...state }
    }
}

export default userReducer
