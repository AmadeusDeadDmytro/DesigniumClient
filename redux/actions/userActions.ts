import * as t from '../types'

export const signIn = () => ({
    type: t.Actions.SIGN_IN,
})

export const signInSuccess = () => ({
    type: t.Actions.SIGN_IN_SUCCESS,
})

export const signInError = () => ({
    type: t.Actions.SIGN_IN_ERROR,
})

export const signUp = user => ({
    type: t.Actions.SIGN_UP,
})

export const signUpSuccess = () => ({
    type: t.Actions.SIGN_UP_SUCCESS,
})

export const signUpError = (error: string) => ({
    type: t.Actions.SIGN_UP_ERROR,
    payload: error,
})
