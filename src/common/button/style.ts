import styled, { css } from 'styled-components'

const ButtonStyle = css`
  display: inline-block;
  text-align: center;
  font-weight: 400;
  user-select: none;
  padding: 7px 14px;
  font-size: 16px;
  cursor: pointer;
  border-style: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  white-space: nowrap;
`

export const ButtonSubmit = styled.input.attrs({ type: 'submit' })`
  ${ButtonStyle};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green600};
  border: 1px solid ${({ theme }) => theme.colors.green600};

  :hover {
    background-color: ${({ theme }) => theme.colors.green900};
  }
`

export const ButtonDanger = styled.div.attrs({ role: 'button' })`
  ${ButtonStyle};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red600};
  border: 1px solid ${({ theme }) => theme.colors.red600};

  :hover {
    background-color: ${({ theme }) => theme.colors.red700};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const ButtonDark = styled.div.attrs({ role: 'button' })`
  ${ButtonStyle};
  color: #fff;
  background-color: #888;
  border: 1px solid ${({ theme }) => theme.colors.neutral500};

  :hover {
    background-color: ${({ theme }) => theme.colors.neutral100};
    color: #000;
  }
`

export const ButtonSuccess = styled.div.attrs({ role: 'button' })`
  ${ButtonStyle};
  color: white;
  background-color: #3ea055;
  font-weight: 600;

  :hover {
    background-color: #394;
  }
`

export const ButtonInfo = styled.div.attrs({ role: 'button' })`
  ${ButtonStyle};
  color: ${({ theme }) => theme.colors.stone800};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.neutral500};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.stone800};
  }
`

export const ButtonLight = styled.div.attrs({ role: 'button' })`
  ${ButtonStyle};
  color: ${({ theme }) => theme.colors.stone800};
  background-color: #eee;
  border: 1px solid ${({ theme }) => theme.colors.neutral500};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.stone800};
  }
`

export const ButtonDisable = styled.div.attrs({ role: 'button' })`
  ${ButtonStyle};
  color: ${({ theme }) => theme.colors.neutral500};
  background-color: ${({ theme }) => theme.colors.neutral200};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  cursor: not-allowed;
`

export const ButtonGroup = styled.div`
  white-space: nowrap;
  > *:not(:first-child) {
    margin-left: 8px;
    min-width: 90px;
  }
`
