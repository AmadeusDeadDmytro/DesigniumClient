import { delay, put } from '@redux-saga/core/effects'
import { stopLoading } from '../actions/userActions'
import { hideNotification } from '../actions/notificationActions'
import { NOTIFICATIONS_DELAY } from '../../helpers/constants'

export function* hideNotificationStopLoading() {
    yield put(stopLoading())
    yield delay(NOTIFICATIONS_DELAY)
    yield put(hideNotification())
}
