import { all, takeLatest } from '@redux-saga/core/effects'
import { watchSignUp } from './user'
import { Actions } from '../types'

export function* rootSaga() {
    yield all([takeLatest(Actions.SIGN_UP, watchSignUp)])
}

export default rootSaga
