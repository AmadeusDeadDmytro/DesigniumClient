import { all, takeLatest } from '@redux-saga/core/effects'
import { signUp } from './user'
import { Actions } from '../types'

export function* rootSaga() {
    yield all([takeLatest(Actions.SIGN_UP, signUp)])
}

export default rootSaga