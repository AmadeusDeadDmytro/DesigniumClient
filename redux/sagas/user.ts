import { call, put } from '@redux-saga/core/effects'
import * as t from '../types'

import { showNotification } from '../actions/notificationActions'
import { postRequest } from '../../helpers/requests'
import { NotificationTypeEnum } from '../../helpers/enums'

export function* watchSignUp({ payload }: t.SignUpAction) {
    try {
        const response = yield call(postRequest, 'signup', payload)

        const notif = yield response
            .json()
            .then(({ error, message }: { error: string; message: string }) => {
                return {
                    type: error
                        ? NotificationTypeEnum.ERROR
                        : NotificationTypeEnum.SUCCESS,
                    msg: error ? error : message,
                }
            })

        yield put(showNotification(notif))
    } catch (error) {
        yield put(
            showNotification({
                type: NotificationTypeEnum.ERROR,
                msg: 'Request Error!',
            })
        )
    }
}
