import { Actions } from '../types'

const INITIAL_STATE = {
    userInfo: {},
    errors: [],
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
        case Actions.SIGN_IN_SUCCESS:
        case Actions.SIGN_UP:
        case Actions.SIGN_UP_SUCCESS:
            return {
                ...state,
            }
        case Actions.SIGN_IN_ERROR:
        case Actions.SIGN_UP_ERROR:
            return {
                ...state,
                errors: [...state.errors, action.payload],
            }
        default:
            return { ...state }
    }
}

export default userReducer
