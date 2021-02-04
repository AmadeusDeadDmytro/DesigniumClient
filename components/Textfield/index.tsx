import React from 'react'
import { FormGroupProps, InputComponentProps } from './types'
import styled from 'styled-components'
import Colors from '../../styles/colors'
import { transition } from '../../styles/constants'

const Input = ({ type, placeholder, onChange, id, value }: InputComponentProps) => {
    return (
        <FormGroup>
            <input type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value, id)} value={value}/>
        </FormGroup>
    )
}

const FormGroup = styled.div<FormGroupProps>`
    width: 100%;
    user-select: none;
  
    input {
        background-color: transparent;
        width: 100%;
        outline: none;
        border: 1px solid ${Colors.LIGHT_TWO};
        padding: 8px 10px;
        color: ${Colors.LIGHT_TWO};
        border-radius: 6px;
        box-shadow: 0 0 11px 2px transparent;
        ${transition};
      
        &:active,
        &:focus {
          ${transition};
          background-color: transparent;
          border: 1px solid ${Colors.MEDIUM_TWO};
          box-shadow: 0 0 11px 2px ${Colors.MEDIUM_TWO};
        }
    }
`

export default Input