import * as t from '../types'

export const signIn = () => ({
    type: t.Actions.SIGN_IN,
})

export const signUp = () => ({
    type: t.Actions.SIGN_UP,
})

export const stopLoading = () => ({
    type: t.Actions.STOP_LOADING,
})
