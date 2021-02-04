import React, { useState } from 'react'
import { SignInModuleProps } from './types'
import { Textfield, Button, Checkbox } from '../../components'
import { Space } from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
import { textColor } from '../../styles/constants'

const INITIAL_FORM_DATA = {
    email: '',
    password: '',
    rememberMe: false,
}

const SignIn = ({}: SignInModuleProps) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {}

    const handleChange = (value: string | boolean, key: string) => {
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Space
                direction={'vertical'}
                size={20}
                wrap
                style={{ width: '100%' }}
            >
                <StyledTitle>Sign In</StyledTitle>
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
                <Checkbox
                    label={'Remember Me'}
                    onChange={handleChange}
                    checked={formData.rememberMe}
                    id={'rememberMe'}
                />
                <Button full onClick={handleSubmit} loading={loading}>
                    Confirm
                </Button>
                <StyledText>
                    Don't have account? <Link href={'/signup'}>Create</Link>
                </StyledText>
            </Space>
        </form>
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

export default SignIn
