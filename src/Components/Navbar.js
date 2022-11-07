import '../Styles/Navbar.css'
//import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
//import { useEffect } from 'react';
import useAuth from "../Hooks/useAuth";
//import { useContext } from 'react';
//import sizeContext from '../Context/sizeContext';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

  const { state } = useAuth()
  //const wS = useContext(sizeContext)
  const { auth, role, f_name, l_name } = state



  const upperChecker = (auth, role) => {
    if (auth) {
      if (role === 'Buyer') {
        return (
          <div className="nav">
            <NavItem
              name='Logout'
              css='NavItem1'
              pepe='/app/logout' />
          </div>
        )
      } else if (role === 'Seller') {
        return (
          <div className="nav">
            <NavItem
              name='Logout'
              css='NavItem1'
              pepe='/app/logout' />
            <NavItem
              name='Orders'
              css='NavItem2'
              pepe='/app/orders' />
          </div>
        )
      } else {
        return (
          <div className="nav">
            <NavItem
              name='Login'
              css='NavItem1'
              pepe='/app/login' />
            <NavItem
              name='Sign up'
              css='NavItem1'
              pepe='/app/signup' />
          </div>
        )
      }
    } else {
      return (
        <div className="nav">
          <NavItem
            name='Login'
            css='NavItem1'
            pepe='/app/login' />
          <NavItem
            name='Sign up'
            css='NavItem1'
            pepe='/app/signup' />
        </div>
      )
    }
  }
  const lowerChecker = (auth, role) => {
    if (auth) {
      if (role === 'Buyer') {
        return (
          <div className="lower">
            <NavItem name='Home' css='NavItem3' pepe='/' />
            <NavItem name='Market' css='NavItem3' pepe='/app/market' />
            <NavItem name='My Orders' css='NavItem3' pepe='/app/orders' />
            <NavItem name='Cart' css='NavItem3' pepe='/app/cart' />
            <NavItem name='Make Request' css='NavItem3' pepe='/app/makerequest' />
            <NavItem name='Profile' css='NavItem3' pepe='/app/profile' />
          </div>
        )
      } else if (role === 'Seller') {
        return (
          <div className="lower">
            <NavItem name='Home' css='NavItem3' pepe='/f' />
            <NavItem name='Post Product' css='NavItem3' pepe='/app/f/postrnp' />
            <NavItem name='My Products' css='NavItem3' pepe='/app/f/myrnp' />
            <NavItem name='Profile' css='NavItem3' pepe='/app/f/profile' />
            <NavItem name='Orders' css='NavItem3' pepe='/app/f/orders' />

          </div>
        )
      } else {
        return (
          <div className="lower">
            <NavItem name='Home' css='NavItem3' pepe='/' />
          </div>
        )
      }
    } else {
      return (
        <div className="lower">
          <NavItem name='Home' css='NavItem3' pepe='/' />
        </div>
      )
    }
  }



  return (
    <nav className='navbar' >
      <div className="upper">
        <div className="logo">
          <NavLink to={'/'}></NavLink>
        </div>
        {f_name && auth && role
          ? <p className='user'>{f_name} {l_name}</p>
          : ''}
        {upperChecker(auth, role)}
      </div>
      <div className="equator"></div>
      {lowerChecker(auth, role)}
    </nav>
  )
}

export default Navbar

