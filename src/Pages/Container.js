//import { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from './NotFound'
import Market from './Market'
import Home from './Home'

import Footer from '../Components/Footer'

import RequireAuth from '../Components/RequireAuth'
import AuthFarmer from '../Components/AuthFarmer'
import AuthCustomer from '../Components/AuthCustomer'
import OneRNP from './OneRNP'
import Categories from './Categories'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Profile from './Profile'
import Cart from './Cart'
import FPost from './FPost'

const Container = ({ constStyle }) => {









  return (
    <div className='Container' style={constStyle}>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/app/'>
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='signup'
            element={<Register />}
          />
          <Route element={<RequireAuth />}>
            <Route element={<AuthCustomer />}>
              <Route
                path='market'
                element={<Market />}
              />
              <Route
                path='categories'
                element={< Categories />}
              />

              <Route
                path='profile'
                element={<Profile />}
              />

              <Route
                path='onernp'
                element={< OneRNP />}
              />
              <Route
                path='cart'
                element={<Cart />}
              />
            </Route>

            <Route element={<AuthFarmer />}>
              <Route
                path='f/post'
                element={<FPost />}
              />
              <Route
                path='f/editrnp'
              //element={< />}
              />
              <Route
                path='f/myrnp'
              //element={< />}
              />
              <Route
                path='f/orders'
              //element={< />}
              />
            </Route>

          </Route>
          <Route
            path='unauthorized'
          //element={< />}
          />
          <Route
            path='logout'
            element={<Logout />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
        <Route
          path='*'
          element={<NotFound />}
        />

      </Routes>

    </div>
  )
}

export default Container
