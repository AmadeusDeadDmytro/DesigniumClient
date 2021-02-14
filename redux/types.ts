import * as enums from '../helpers/enums'

/////////////////////////////////////////////////////////////// Actions
export enum Actions {
    // notifications
    SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
    HIDE_NOTIFICATION = 'HIDE_NOTIFICATION',
    // user
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
}

//////////////////////////////////////////////////////////////// States
export interface NotificationsStateType {
    notification: NotificationType | null
}

export type NotificationType = {
    type: enums.NotificationTypeEnum
    msg: string
}

export interface UserStateType {
    userInfo: UserInfoType
}

export type UserInfoType = {}

//////////////////////////////////////////////////////////////// ActionTypes
export interface AddNotificationAction {
    type: typeof Actions.SHOW_NOTIFICATION
    payload: NotificationType
}

export interface HideNotificationAction {
    type: typeof Actions.HIDE_NOTIFICATION
}

export type NotificationsActionTypes = AddNotificationAction | HideNotificationAction

export interface SignInAction {
    type: typeof Actions.SIGN_IN
    payload: UserStateType
}
export interface SignUpAction {
    type: typeof Actions.SIGN_UP
    payload: {
        name: string
        email: string
        password: string
        confirmPassword: string
    }
}

export type UserActionTypes = SignInAction | SignUpAction
