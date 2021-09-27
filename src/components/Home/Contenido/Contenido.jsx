import React from 'react'
import styled from '@emotion/styled'

const DIV = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
& h1 {
  font-size: 2rem;
  span{
    color: red;
  }
  }
`
const Contenido = () => {
  return (
    <DIV>
      <h1>The Best Place To <br /> Find The Best <span> Stuff </span></h1>
    </DIV>
  )
}

export default Contenido
