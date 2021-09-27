import React from 'react'
import styled from '@emotion/styled'
import { Link as LinkRouter, withRouter } from 'react-router-dom'

const Link = styled(LinkRouter)`
  text-decoration: none;
    font-size: 1rem;
    position: relative;
    color: ${({ theme }) => theme.BlackColor1};
    &::after{
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.CafeColors2};
      left: 0;
      height: 2px;
      bottom: -2px;
      width: 0;
      transition: width 200ms linear;
    }
    
    &:hover::after{
      width: 100%;
  }
`
const LinkR = ({ children, href }) => {
  return (
    <Link to={href}>
        {children}
    </Link>
  )
}
export default withRouter(LinkR)
