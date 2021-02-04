import { put } from '@redux-saga/core/effects'

import { signInSuccess, signInError, signUpError, signUpSuccess } from '../actions/userActions'
import { API } from '../../config'

export function* signUp(action) {
    try {
        const response = yield fetch(API + '/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({})
        })

        const msg = yield response.json().message
        console.log(msg)
        yield put(signUpSuccess())
    } catch (e) {
        yield put(signUpError())
    }
}