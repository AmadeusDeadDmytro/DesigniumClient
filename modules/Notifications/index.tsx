import React from 'react'
import styled from 'styled-components'
import Notification from './notification'
import { RootStateOrAny, useSelector } from 'react-redux'

const Notifications = () => {
    const state = useSelector((state: RootStateOrAny) => state)
    const {
        _notifications: { notification },
    } = state

    return (
        <NotificationsWrapper>
            {notification && (
                <Notification
                    type={notification.type}
                    msg={notification.msg}
                    iconSize={30}
                />
            )}
        </NotificationsWrapper>
    )
}

export default Notifications

const NotificationsWrapper = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    background: transparent;
`
