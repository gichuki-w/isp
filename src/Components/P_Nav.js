import React from 'react'
import useAuth from '../Hooks/useAuth'
import '../Styles/P_Nav.css'
import PNavItem from './P_Nav_Item'
import { NavLink } from 'react-router-dom'

const PNav = ({ setshowPNav }) => {


  const { state } = useAuth()
  const { auth, role, f_name, l_name } = state

  const navChecker = (auth, role) => {
    if (auth) {
      if (role === 'Buyer') {
        return (
          <>
            <PNavItem name='Home' css='P-item' pepe='/' />
            <PNavItem name='Market' css='P-item' pepe='/app/market' />
            <PNavItem name='My Orders' css='P-item' pepe='/app/orders' />
            <PNavItem name='Cart' css='P-item cart' pepe='/app/cart' />
            <PNavItem name='Categories' css='P-item' pepe='/app/makerequest' />
          </>
        )
      } else if (role === 'Seller') {
        return (
          <>
            <PNavItem name='Home' css='P-item' pepe='/f' />
            <PNavItem name='Sell Item' css='P-item' pepe='/app/f/postrnp' />
            <PNavItem name='My Products' css='P-item' pepe='/app/f/myrnp' />
            <PNavItem name='Orders' css='P-item' pepe='/app/f/orders' />
          </>
        )
      } else {
        return (
          < >
            <PNavItem name='Home' css='P-item' pepe='/' />
          </>
        )
      }
    } else {
      return (
        <>
          <PNavItem name='Home' css='P-item' pepe='/' />
        </>
      )
    }
  }



  const xHandler = (e) => {
    setshowPNav(false)
  }

  return (
    <div className='Kasimu'>
      <div className="x" onClick={xHandler}>
        X
      </div>
      {f_name
        ? <div className="cred">
          <div className="lg"></div>
          <NavLink className='p-user' to={'/app/profile'}>{f_name} {l_name}</NavLink>
        </div>
        : ''
      }
      {navChecker(auth, role)}
    </div>
  )
}

export default PNav
