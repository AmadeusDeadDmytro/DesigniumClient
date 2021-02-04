import { Actions } from '../types'

const INITIAL_STATE = {
    userInfo: {},
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return { ...state }
        case Actions.SIGN_IN_SUCCESS:
            return { ...state }
        case Actions.SIGN_IN_ERROR:
            return { ...state }
        case Actions.SIGN_UP:
            return { ...state }
        case Actions.SIGN_UP_SUCCESS:
            return { ...state }
        case Actions.SIGN_UP_ERROR:
            return { ...state }
        default:
            return { ...state }
    }
}

export default userReducer
