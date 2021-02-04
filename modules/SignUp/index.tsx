import React, { useState } from 'react'
import { Textfield, Button } from '../../components'
import { Space } from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
import { textColor } from '../../styles/constants'

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
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {}

    const handleChange = (value: string, key: string) => {
        setFormData({
            ...formData,
            error: '',
            [key]: value,
        })
    }

    return (
        <Space direction={'vertical'} size={20} wrap style={{ width: '100%' }}>
            <StyledTitle>Sign Up</StyledTitle>
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
            <Button full onClick={handleSubmit} loading={loading}>
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
