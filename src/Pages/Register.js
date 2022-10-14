import React, { useState, useEffect } from 'react';
import '../Styles/Register.css'
import axios from 'axios';
import { FaIdCardAlt, FaUserAlt, FaLongArrowAltLeft } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';



const Register = () => {


  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [username, setusername] = useState('');

  const [suc, setsuc] = useState(null);

  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log('handlesubmit')
    if (email.length < 2 && email.length > 20) {
      seterr('email invalid')
      return
    } else if (pass.length < 2 && pass.length > 20) {
      seterr('password invalid')
      return
    } else if (username.length < 2 && username.length > 20) {
      seterr('username invalid')
      return
    }
    try {
      setloading(true)
      const person = await axios.post('http://localhost:5000/api/v1/register', { email: email, password: pass, username: username }, {
        withCredentials: true
      })
      //console.log(person)
      if (person.statusText === 'OK') {
        //console.log('Everything went well, save responce to reducer')
        const { message } = person.data
        //console.log(message)
        setsuc(message)
        setloading(false)
        seterr(null)
        navigate('/login')
        return
      }
      setloading(false)
      seterr('Please ty again..')
    } catch (error) {
      seterr('Please ty again..')
      setloading(false)
      //throw error
    }
  }




  return (
    <div className='Register'>

      <div className='container'>
        <Link to={'/'}>
          <FaLongArrowAltLeft className='icob' />
        </Link>

        <p className='header'>Sign Up</p>

        <form
          className='register-form'
          onSubmit={handleSubmit}
        >
          {suc
            ? <div className="succ">
              {suc}
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
          <label htmlFor="username"></label>
          <p className='top'>Username</p>
          <div className='reg-cont'>
            <FaUserAlt className='ico' />
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setusername(e.target.value)
                seterr(null)
                setloading(false)
              }}
            />
          </div>

          <label htmlFor="email"></label>
          <p className='top'>Email</p>
          <div className='reg-cont'>
            <FaIdCardAlt className='ico' />
            <input
              type="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
                seterr(null)
                setloading(false)
              }}
            />
          </div>

          <label htmlFor="password"></label>
          <p className='top'>Password</p>
          <div className='reg-cont'>
            <FaUserAlt className='ico' />
            <input
              type="password"
              value={pass}
              onChange={(e) => {
                setpass(e.target.value)
                seterr(null)
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
          Already have an account
          <Link to='/login'> Login</Link>
        </p>

        <p className='register'>
          Forgot password
          <Link to='/'> Reset password</Link>
        </p>
        {/*<p>Forgot password </p>*/}
      </div>
    </div>
  )
};

export default Register;
