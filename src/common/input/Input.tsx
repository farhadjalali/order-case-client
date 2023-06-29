import React, { KeyboardEvent } from 'react'
import styled from 'styled-components'
import { KEY_ENTER } from '../../constants'

const InputWrapper = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
`

interface Props extends React.HTMLAttributes<HTMLInputElement>, React.RefAttributes<HTMLInputElement> {
  onEnter?: (value: string) => void
  onValueChange?: (value: string) => void
  resetOnEnter?: boolean
  autoFocus?: boolean
  value?: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ onEnter, onValueChange, resetOnEnter, value, ...rest }, ref) => {
    function handleKeyPress(ev: KeyboardEvent) {
      if (ev.code === KEY_ENTER && onEnter) {
        onEnter((ev.target as HTMLInputElement).value)
        if (resetOnEnter) (ev.target as HTMLInputElement).value = ''
      }
    }

    return (
      <InputWrapper
        {...rest}
        value={value}
        onKeyPress={handleKeyPress}
        onChange={(ev) => onValueChange && onValueChange(ev.target.value)}
        ref={ref}
      />
    )
  }
)
Input.displayName = 'Input'
