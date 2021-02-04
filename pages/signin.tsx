import React from 'react'
import { Col, Space } from 'antd';
import { StyledRow } from '../styles/styled/home'
import { SignInModule } from '../modules'
import styled from 'styled-components'
import { textColor } from '../styles/constants'
import { motion } from 'framer-motion'

const SignIn = () => {
	return (
		<StyledRow align={'middle'}>
			<Col span={8} offset={4}>
				<StyledTitle>Designium</StyledTitle>
				<Space direction={'vertical'} size={20}>
					<StyledText>New way for creating game design</StyledText>
				</Space>
			</Col>
			<Col span={4} offset={4}>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} layoutId={'form'}>
					<SignInModule />
				</motion.div>
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

export default SignIn