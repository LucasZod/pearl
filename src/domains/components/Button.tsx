import styled from '@emotion/styled'

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
}
export const Button = ({ primary, secondary, ...props }: IButton) => {
  const { ButtonLayout } = Button
  return <ButtonLayout {...props} primary={primary} secondary={secondary} />
}
Button.ButtonLayout = styled.button<{ primary?: boolean; secondary?: boolean }>`
  border-radius: 31px;
  transition: background 0.2s ease-in-out;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  @media (max-width: 768px) {
    padding: 8px 10px;
  }
  ${(props) =>
    props.primary &&
    `
  background: #14bfdb;
  color: #FFFFFF;
`}
  ${(props) =>
    props.secondary &&
    `
  background: #FFFFFF;
  border: 1px solid #000000;
  color: #000000;
`}
  &:hover {
    ${(props) =>
      props.primary &&
      `
    background: #bbe7ef;
    `}
    ${(props) =>
      props.secondary &&
      `
    background: #BBE7EF;
    border: none;
    `}
  }
`
