import React from 'react'
import { Col, Space } from 'antd';
import { Button } from '../components'
import { StyledRow } from '../styles/styled/home'
import styled from 'styled-components'
import { textColor } from '../styles/constants'

const HomePage = () => {
    return (
        <StyledRow align={'middle'}>
            <Col span={20} offset={4}>
                <StyledTitle>Designium</StyledTitle>
                <Space direction={'vertical'} size={20}>
                    <StyledText>New way for creating game design</StyledText>
                    <Button href={'signin'}>Let's start</Button>
                </Space>
            </Col>
        </StyledRow>
    )
}

const StyledText = styled.div`
  ${textColor};
  user-select: none;
`

const StyledTitle = styled.h1`
  ${textColor};
  user-select: none;
`


export default HomePage