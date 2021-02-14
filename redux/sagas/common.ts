import { delay, put } from '@redux-saga/core/effects'
import { stopLoading } from '../actions/userActions'
import { hideNotification } from '../actions/notificationActions'

export function* hideNotificationStopLoading() {
    yield put(stopLoading())
    yield delay(3000)
    yield put(hideNotification())
}
