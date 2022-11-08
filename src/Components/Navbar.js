import '../Styles/Navbar.css'
//import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
//import { useEffect } from 'react';
import useAuth from "../Hooks/useAuth";
import { useContext } from 'react';
import sizeContext from '../Context/sizeContext';
import { NavLink } from 'react-router-dom';



const Navbar = ({ setshowPNav }) => {

  const { state } = useAuth()
  const wS = useContext(sizeContext)
  const { auth, role, f_name, l_name } = state



  const upperChecker = (auth, role) => {
    if (auth) {
      if (role === 'Buyer') {
        return (
          <>
            <NavItem name='Home' css='item' pepe='/' />
            <NavItem name='Market' css='item' pepe='/app/market' />
            <NavItem name='Categories' css='item' pepe='/app/categories' />
            <NavItem name='My Orders' css='item' pepe='/app/orders' />
            <NavItem name='Cart' css='item cart' pepe='/app/cart' />
          </>
        )
      } else if (role === 'Seller') {
        return (
          <>
            <NavItem name='Home' css='item' pepe='/' />
            <NavItem name='Sell Item' css='item' pepe='/app/f/post' />
            <NavItem name='My Products' css='item' pepe='/app/f/myrnp' />
            <NavItem name='Orders' css='item' pepe='/app/f/orders' />
          </>
        )
      } else {
        return (
          < >
            <NavItem name='Home' css='item' pepe='/' />
          </>
        )
      }
    } else {
      return (
        <>
          <NavItem name='Home' css='item' pepe='/' />
        </>
      )
    }
  }



  //const lowerChecker = (auth, role) => {
  //  if (auth) {
  //    if (role === 'Buyer') {
  //      return (

  //      )
  //    } else if (role === 'Seller') {
  //      return (

  //      )
  //    } else {
  //      return (

  //      )
  //    }
  //  } else {
  //    return (

  //    )
  //  }
  //}

  const actionsChecker = (auth, role) => {
    if (auth) {
      return (
        < NavItem
          name='Sign Out'
          css='item3'
          pepe='/app/logout' />
      )
    } else {
      return (
        <>
          <NavItem
            name='Login'
            css='item2'
            pepe='/app/login' />
          <NavItem
            name='Sign in'
            css='item2'
            pepe='/app/signup' />
        </>
      )
    }
  }


  const PhoneNav = () => {

    return (
      <div className="p_nav">
        <div className="hambuger" onClick={() => setshowPNav(true)}>

        </div>
        <div className="mininav">
          {auth
            ? < NavItem
              name='Sign Out'
              css='item3'
              pepe='/app/logout' />
            : <>
              <NavItem
                name='Login'
                css='item2'
                pepe='/app/login' />
              <NavItem
                name='Sign in'
                css='item2'
                pepe='/app/signup' />
            </>
          }
        </div>
      </div>
    )
  }
  return (
    wS.width < 600
      ? <PhoneNav />
      : <nav className='navbar' >

        <div className="upper">

          <div className="logo">
            <NavLink to={'/'}></NavLink>
          </div>

          <nav className="adbcp">
            {upperChecker(auth, role)}
          </nav>

          {f_name && auth && role
            ? <>
              <NavLink className='user' to={'/app/profile'}>{f_name} {l_name}</NavLink>
            </>
            : ''}

          <nav className="actions">
            {actionsChecker(auth, role)}
          </nav>

        </div>
        <div className="equator"></div>
        <div className="lower">
          {/*{lowerChecker(auth, role)}*/}
        </div>
      </nav>
  )
}

export default Navbar

