import { FC, HTMLAttributes } from 'react'
import { ButtonDanger, ButtonDark, ButtonDisable, ButtonInfo, ButtonLight, ButtonSubmit, ButtonSuccess } from './style'

type ButtonStyle = 'info' | 'light' | 'danger' | 'dark' | 'disabled' | 'submit' | 'success'

type Props = Omit<HTMLAttributes<HTMLDivElement>, 'role'> & {
  style?: ButtonStyle
}

export const Button: FC<Props> = ({ style = 'info', children, ...attrs }) => {
  switch (style) {
    case 'danger':
      return <ButtonDanger {...attrs}>{children}</ButtonDanger>
    case 'dark':
      return <ButtonDark {...attrs}>{children}</ButtonDark>
    case 'disabled':
      return <ButtonDisable {...attrs}>{children}</ButtonDisable>
    case 'light':
      return <ButtonLight {...attrs}>{children}</ButtonLight>
    case 'submit':
      return <ButtonSubmit {...attrs} value={typeof children === 'string' ? children : ''} />
    case 'success':
      return <ButtonSuccess {...attrs}>{children}</ButtonSuccess>
    case 'info':
    default:
      return <ButtonInfo {...attrs}>{children}</ButtonInfo>
  }
}
