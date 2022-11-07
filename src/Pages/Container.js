//import { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from './NotFound'
import Market from './Market'
import Home from './Home'

import Footer from '../Components/Footer'

import RequireAuth from '../Components/RequireAuth'
import AuthFarmer from '../Components/AuthFarmer'
import AuthAdmin from '../Components/AuthAdmin'
import AuthCustomer from '../Components/AuthCustomer'
import OneRNP from './OneRNP'
import Anyny from './Anyny'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'



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
                path='makerequest'
                element={< Anyny />}
              />
              <Route
                path='profile'
              //element={< />}
              />
              <Route
                path='onernp'
                element={< OneRNP />}
              />
              <Route
                path='cart'
              //element={< />}
              />
            </Route>

            <Route element={<AuthFarmer />}>
              <Route
                path='postrnp'
                element={<p>Post rnp</p>}
              />
              <Route
                path='editrnp'
              //element={< />}
              />
              <Route
                path='farmerrnp'
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
      <Footer />
    </div>
  )
}

export default Container
