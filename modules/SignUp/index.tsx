import React, { useState } from 'react'
import { Textfield, Button } from '../../components'
import { Space } from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
import { textColor } from '../../styles/constants'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

const INITIAL_FORM_DATA = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    error: '',
    loading: false,
    message: '',
}

const SignUp = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)

    const dispatch = useDispatch()
    const state = useSelector((state: RootStateOrAny) => state)
    const {
        _user: { loading },
    } = state

    const _signUp = async () => {
        await dispatch({
            type: 'SIGN_UP',
            payload: {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            },
        })
    }

    const handleChange = (value: string, key: string) => {
        setFormData({
            ...formData,
            error: '',
            [key]: value,
        })
    }

    const handleConfirm = () => {
        _signUp().then(r => r)
    }

    return (
        <Space direction={'vertical'} size={20} wrap style={{ width: '100%' }}>
            <StyledTitle>Sign Up {loading.toString()}</StyledTitle>
            <Textfield
                type={'text'}
                placeholder={'Name'}
                onChange={handleChange}
                id={'name'}
                value={formData.name}
            />
            <Textfield
                type={'email'}
                placeholder={'Email'}
                onChange={handleChange}
                id={'email'}
                value={formData.email}
            />
            <Textfield
                type={'password'}
                placeholder={'Password'}
                onChange={handleChange}
                id={'password'}
                value={formData.password}
            />
            <Textfield
                type={'password'}
                placeholder={'Confirm Password'}
                onChange={handleChange}
                id={'confirmPassword'}
                value={formData.confirmPassword}
            />
            <Button full onClick={() => handleConfirm()} loading={loading}>
                Confirm
            </Button>
            <StyledText>
                Already have account? Back to{' '}
                <Link href={'/signin'}>Sign In</Link>
            </StyledText>
        </Space>
    )
}

const StyledText = styled.div`
    ${textColor};
    user-select: none;
    text-align: center;
`
const StyledTitle = styled.h2`
    ${textColor};
    font-size: 2rem;
    user-select: none;
    text-align: center;
`

export default SignUp
