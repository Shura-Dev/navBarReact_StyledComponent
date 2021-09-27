import React, { useState } from "react";
import { CONTAINER } from "./NavbarStyle";
import { FaBars, FaGithub, FaTimes} from "react-icons/fa";
import LinkR from '../../Button/Link'
import Button from '../../Button/Button'

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  return (
    <CONTAINER open={menuMobile}>
      <div>
        <FaGithub style={{ fontSize: '40px' }} />
        Git
      </div>
      <ul>
        <li onClick={() => setMenuMobile(!menuMobile)}>
          <LinkR href="#">Welcome</LinkR>
        </li>
        <li onClick={() => setMenuMobile(!menuMobile)}>
          <LinkR href="#about">Shop</LinkR>
        </li>
        <li onClick={() => setMenuMobile(!menuMobile)}>
          <LinkR href="#">Cart</LinkR>
        </li>
        <li onClick={() => setMenuMobile(!menuMobile)}>
          <Button href="#about">Sign Up</Button>
        </li>
      </ul>
      {!menuMobile
        ? <span>
            <FaBars onClick={() => setMenuMobile(!menuMobile)}></FaBars> 
      </span>
        : <span>
            <FaTimes onClick= {() => setMenuMobile(!menuMobile)} />
      </span>
      }
    </CONTAINER>
  )
}

export default Navbar
