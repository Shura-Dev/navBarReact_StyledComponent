import React from 'react'
import { Gridlayout, Asideleft, Nav, Asideright, Footer } from './HomeStyle'
import NavBar from './NavBar/Navbar'
import Products from './Product/Products'
import Contenido from './Contenido/contenido'
const Home = () => {
  return (
    <>
      <Nav>
        <NavBar />
      </Nav>
      <Gridlayout>
        <Asideleft>
          <Products/>
        </Asideleft>
          <Asideright>
            <Contenido />
            </Asideright>
        <Footer></Footer>
      </Gridlayout>
      </>
  )
}

export default Home
