import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import NotFound from './NotFound'



const Container = () => {


  return (
    <div className='Container'>
      <Routes>

        <Route path='/' index element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default Container
