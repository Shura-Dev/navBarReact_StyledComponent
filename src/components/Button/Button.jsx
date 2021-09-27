import React from 'react'
import styled from '@emotion/styled'
import { Link as LinkRouter, withRouter } from 'react-router-dom'

const Link = styled(LinkRouter)`
  text-decoration: none;
    background-color: ${({ theme }) => theme.BlackColor1};
    border-radius: 5px;
    margin: 0 25px;
    padding: 5px 30px;
    font-size: 1rem;
    position: relative;
    color: ${({ theme }) => theme.WhiteColor};
`
const ButtonR = ({ children, href }) => {
  return (
    <Link to={href}>
        {children}
    </Link>
  )
}
export default withRouter(ButtonR)
