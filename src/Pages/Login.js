import React, { useState } from 'react';
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaIdCardAlt, FaUserAlt, FaLongArrowAltLeft } from "react-icons/fa";
import axios from 'axios';

import userReducer from '../Reducers/User';

const Login = () => {

  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const navigate = useNavigate();

  //const [user, dispatch] = useReducer(reducer, { user: {}, redirect: '', message: '' });
  const { user, dispatch } = userReducer


  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log('handlesubmit')
    if (email.length < 2) {
      seterr('email invalid')
      return
    } else if (pass.length < 2) {
      seterr('password invalid')
      return
    }
    try {
      setloading(true)
      const person = await axios.post(process.env.REACT_APP_LOGIN, { email: email, password: pass }, {
        withCredentials: true
      })
      //console.log(person)
      if (person.statusText === 'OK') {

        console.log(person.data)
        const { message, redirect, user } = person.data

        dispatch({
          type: 'DATAFROMAPP',
          payload: {
            user: user,
            redirect: redirect,
            message: message
          }
        })

        //console.log(user)
        setloading(false)
        //navigate('/')

      }
      setloading(false)
      seterr('Please ty again..')
    } catch (error) {
      seterr('Please ty again..')
      setloading(false)
      //throw error
    }
  }

  console.log(user)

  return (
    <div className='Login'>
      <div className='container'>
        <Link to={'/'}>
          <FaLongArrowAltLeft className='icob' />
        </Link>

        <p className='header'>Log in</p>

        <form
          className='login-form'
          onSubmit={handleSubmit}
        >
          {user.reqmessage
            ? <div className="succ">
              Registration Successfull, please log in
            </div>
            : ''

          }
          {err
            ? <div
              className="err">
              {err}
            </div>
            : ''
          }
          <label htmlFor="email"></label>
          <p className='top'>Email</p>
          <div className='input-cont'>
            <FaIdCardAlt className='ico' />
            <input
              type="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
                seterr('')
                setloading(false)
              }}
            />
          </div>

          <label htmlFor="password"></label>
          <p className='top'>Password</p>
          <div className='input-cont'>
            <FaUserAlt className='ico' />
            <input
              type="password"
              value={pass}
              onChange={(e) => {
                setpass(e.target.value)
                seterr('')
                setloading(false)
              }}
            />
          </div>

          <button
            disabled={loading}
            onClick={handleSubmit}
          >LOGIN</button>
        </form>

        <p className='register'>
          Dont have an account
          <Link to='/signup'> Register</Link>
        </p>

        <p className='register'>
          Forgot password
          <Link to='/signup'> Reset password</Link>
        </p>
        {/*<p>Forgot password </p>*/}
      </div>
    </div>
  )
};

export default Login;
