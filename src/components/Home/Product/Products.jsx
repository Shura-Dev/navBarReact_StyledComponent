import React from 'react'
import styled from '@emotion/styled'

const CONTAINER = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img{
    width: 70%;
    height: 70%;
    border-radius: 30px;
    border: 2px solid white;
  }
`
const Products = () => {
  return (
    <CONTAINER>
      <img src="./plantas.jpg" alt="" />
    </CONTAINER>
  )
}

export default Products
