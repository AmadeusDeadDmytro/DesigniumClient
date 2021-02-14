import * as t from '../types'

export const showNotification = (notification: t.NotificationType) => ({
    type: t.Actions.SHOW_NOTIFICATION,
    payload: notification,
})

export const hideNotification = () => ({
    type: t.Actions.HIDE_NOTIFICATION,
})