import React from 'react'
import styled from 'styled-components'
import { BiError, BiInfoCircle, BiCheckCircle } from 'react-icons/bi'
import { NotificationPropsType } from './types'
import Colors from '../../styles/colors'
import { Space } from 'antd'

const Notification = ({ type, msg, iconSize }: NotificationPropsType) => {
    const getColor = (type: string) => {
        switch (type) {
            case 'error':
                return Colors.ERROR
            case 'success':
                return Colors.SUCCESS
            case 'info':
                return Colors.INFO
            default:
                return null
        }
    }

    const getIcon = (type: string) => {
        switch (type) {
            case 'error':
                return <BiError size={iconSize} />
            case 'success':
                return <BiCheckCircle size={iconSize} />
            case 'info':
                return <BiInfoCircle size={iconSize} />
            default:
                return null
        }
    }

    return (
        <NotificationWrapper
            background={getColor(type)}
            direction={'horizontal'}
            align={'center'}
        >
            {getIcon(type)}
            <Message>{msg}</Message>
        </NotificationWrapper>
    )
}

export default Notification

const NotificationWrapper = styled(Space)<{ background: string }>`
    background-color: ${({ background }) => background && background};
    color: ${Colors.LIGHT_ONE};
    padding: 6px 10px;
    border-radius: 4px;
    width: 300px;
`

const Message = styled.p``
