import React from 'react'
import '../Styles/Navbar.css'
//import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="upper">
        <div className="logo">
          {/*<div className="lg">
          </div>*/}
        </div>
        <div className="nav">
          <NavItem name='Login' css='NavItem1' pepe='/app/login' />
          <NavItem name='Register' css='NavItem2' pepe='/app/signup' />
        </div>
      </div>
      <dv className="lower">
        <NavItem name='Home' css='NavItem3' pepe='/' />
        <NavItem name='Market' css='NavItem3' pepe='/app/market' />
        <NavItem name='Customer Request' css='NavItem3' pepe='/app/makerequest' />

      </dv>
    </div>
  )
}

export default Navbar
