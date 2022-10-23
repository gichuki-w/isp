//import { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from './NotFound'
import Market from './Market'
import Navbar from '../Components/Navbar'
import Home from './Home'


import useAuth from '../Hooks/useAuth'
import RequireAuth from '../Components/RequireAuth'
import OneRNP from './OneRNP'
import Anyny from './Anyny'
import Footer from '../Components/Footer'

//import reducer from '../Reducers/User'



const Container = () => {



  const { role, auth } = useAuth()

  console.log(role, auth)
  return (
    <div className='Container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/app/'>

          {/*Public Routes*/}
          <Route
            path='login'
          //element={<Login />}
          />
          <Route
            path='signup'
          //element={<Register />}
          />
          <Route
            path='market'
            element={<Market />}
          />
          <Route
            path='makerequest'
            element={< Anyny />}
          />
          <Route
            path='onernp'
            element={< OneRNP />}
          />
          <Route
            path='unauthorized'
          //element={< />}
          />


          {/*Protected routes*/}
          <Route element={<RequireAuth />}>
            <Route
              path='profile'
            //element={< />}
            />
            <Route
              path='postrnp'
            //element={}
            />
            <Route
              path='editrnp'
            //element={< />}
            />
            <Route
              path='specificuserrnp'
            //element={< />}
            />
            <Route
              path='cart'
            //element={< />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Route>
          {/* catch all */}
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
