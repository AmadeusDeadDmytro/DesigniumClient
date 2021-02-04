import React from 'react'
import { CheckboxProps } from './types'
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri'
import Colors from '../../styles/colors'
import { Space } from 'antd'
import styled from 'styled-components'

const Checkbox = ({ label, checked, onChange, id }: CheckboxProps) => {

    return (
        <StyledDiv onClick={() => onChange(!checked, id)}>
            <Space direction={'horizontal'} size={10} align={'center'}>
                {checked ? <RiCheckboxLine color={Colors.LIGHT_TWO} size={20} display={'flex'}/> : <RiCheckboxBlankLine color={Colors.LIGHT_TWO} size={20} display={'flex'}/>}
                <Label>{label}</Label>
            </Space>
        </StyledDiv>
    )
}

const Label = styled.p`
    color: ${Colors.LIGHT_TWO};
    user-select: none;
`

const StyledDiv = styled.div`
    cursor: pointer;
`


export default Checkbox