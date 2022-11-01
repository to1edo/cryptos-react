import styled from "@emotion/styled"


const Message = styled.p`
  text-align: center;
  background-color: #f0ab8d;
  color: #eb2632;
  font-weight: 700;
  padding: 6px;
  border-radius: 6px;
`


const Alert = ({children}) => {
  return (
    <Message>{children}</Message>
  )
}

export default Alert