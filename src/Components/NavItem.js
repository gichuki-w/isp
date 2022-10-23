import React from 'react'
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'


const NavItem = ({ name, css, pepe }) => {
  return (
    //<button className={css}>
    <NavLink className={css} to={pepe}>
      {name}
    </NavLink>
    //</button>
  )
}

export default NavItem
