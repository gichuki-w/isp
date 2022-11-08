import React from 'react'
import { NavLink } from 'react-router-dom'


const PNavItem = ({ css, pepe, name }) => {
  return (
    <NavLink className={css} to={pepe} end>
      {name}
    </NavLink>
  )
}

export default PNavItem
