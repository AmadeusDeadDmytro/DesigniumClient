import { put, call } from '@redux-saga/core/effects'

import {
    signInSuccess,
    signInError,
    signUpError,
    signUpSuccess,
} from '../actions/userActions'
import { postRequest } from '../../helpers/requests'

export function* watchSignUp({ payload }) {
    try {
        const response = yield call(postRequest, 'signup', payload)

        if (response.status >= 200 && response.status <= 300) {
            yield put(signUpSuccess())
        } else {
            throw response
        }
    } catch (error) {
        yield put(signUpError(error))
    }
}
