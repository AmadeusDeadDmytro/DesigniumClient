import { Actions } from '../types'

export const signIn = () => ({
    type: Actions.SIGN_IN
})

export const signInSuccess = () => ({
    type: Actions.SIGN_IN_SUCCESS
})

export const signInError = () => ({
    type: Actions.SIGN_IN_ERROR
})

export const signUp = () => ({
    type: Actions.SIGN_UP
})

export const signUpSuccess = () => ({
    type: Actions.SIGN_UP_SUCCESS
})

export const signUpError = () => ({
    type: Actions.SIGN_UP_ERROR
})
