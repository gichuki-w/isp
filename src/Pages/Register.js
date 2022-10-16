import React, { useState } from 'react';
import '../Styles/Register.css'
import axios from 'axios';
import { FaIdCardAlt, FaUserAlt, FaLongArrowAltLeft } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
const counties = require('..//Data//counties.json')
const gender = require('..//Data//gender.json')
const choice = require('..//Data//choice.json')


const Register = () => {


  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);

  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [confirmpass, setconfirmpass] = useState('');
  const [username, setusername] = useState('');
  const [phone, setphone] = useState('');
  const [gender_id, setgender_id] = useState(3);
  const [county, setcounty] = useState('None');
  const [choice_id, setchoice_id] = useState(1);


  const [suc, setsuc] = useState(null);

  const navigate = useNavigate();

  //console.log(process.env.REACT_APP_SIGINUP)

  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log('handlesubmit')
    if (email.length < 2 && email.length > 20) {
      seterr('email invalid')
      return
    } else if (pass.length < 1 && pass.length > 20) {
      seterr('password invalid')
      return
    } else if (username.length < 1 && username.length > 20) {
      seterr('username invalid')
      return
    } else if (phone.length < 2 && phone.length > 15) {
      seterr('Phone Number invalid')
      return
    }
    try {
      setloading(true)
      const res = await axios.post(process.env.REACT_APP_SIGINUP, {
        email: email,
        password: pass,
        username: username,
        confirmpass: confirmpass,
        phone: phone,
        gender_id: gender_id,
        choice_id: choice_id,
        county: county
      }, {
        withCredentials: true
      })
      //console.log(res)
      if (res.statusText === 'OK') {
        //console.log('Everything went well, save responce to reducer')
        const { message, redirect } = res.data
        //console.log(message)
        setsuc(message)
        setloading(false)
        seterr(null)
        navigate(redirect)
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
  //console.log(data)



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

          <p className='top'>Username:</p>
          <div className='reg-cont'>
            <FaUserAlt className='ico' />
            <input
              id='username'
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
          <p className='top'>Email:</p>
          <div className='reg-cont'>
            <FaIdCardAlt className='ico' />
            <input
              id='email'
              type="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
                seterr(null)
                setloading(false)
              }}
            />
          </div>






          <label htmlFor="phone"></label>
          <p className='top'>Phone:</p>
          <div className='reg-cont'>
            <FaUserAlt className='ico' />
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value)
                seterr(null)
                setloading(false)
              }}
            />
          </div>






          <label htmlFor="password"></label>
          <p className='top'>Password:</p>
          <div className='reg-cont'>
            <FaUserAlt className='ico' />
            <input
              id="password"
              type="password"
              value={pass}
              onChange={(e) => {
                setpass(e.target.value)
                seterr(null)
                setloading(false)
              }}
            />
          </div>





          <label htmlFor="confirmpass"></label>
          <p className='top'>Confirm password:</p>
          <div className='reg-cont'>
            <FaUserAlt className='ico' />
            <input
              id="confirmpass"
              type="password"
              value={confirmpass}
              onChange={(e) => {
                setconfirmpass(e.target.value)
                seterr(null)
                setloading(false)
              }}
            />
          </div>







          <div className="select-cont">
            <label htmlFor="counties"></label>
            <div className="select-cont-cont">
              <p className='county-para'>County: </p>
              <select
                name="counties"
                id="counties"
                className="counties"
                onChange={(e) => {
                  setcounty(e.target.value)
                  seterr(null)
                  setloading(false)
                }}>
                {counties.map((el) => (
                  <option key={el.county_id} value={el.county_id}>{el.county_name}</option>
                ))}
              </select>
            </div>

            <label htmlFor="gender"></label>
            <div className="select-cont-cont">

              <p className='county-para'>Gender: </p>

              <select
                name="gender"
                id="gender"
                className="gender"
                onChange={(e) => {
                  setgender_id(e.target.value)
                  seterr(null)
                  setloading(false)
                }}
              >
                {gender.map((el) => (
                  <option key={el.gender_id} value={el.gender_id}>{el.gender_name}</option>
                ))}
              </select>
            </div>

            <label htmlFor="choice"></label>
            <div className="select-cont-cont">

              <p className='county-para'>Are you a Farmer, Seller or Both: </p>
              <select
                name="choice"
                id="choice"
                className="choice"
                onChange={(e) => {
                  setchoice_id(e.target.value)
                  seterr(null)
                  setloading(false)
                }}
              >
                {choice.map((el) => (
                  <option key={el.choice_id} value={el.choice_id}>{el.choice_name}</option>
                ))}
              </select>
            </div>

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
