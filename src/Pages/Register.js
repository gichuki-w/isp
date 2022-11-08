import { useState } from 'react'
import '../Styles/Register.css'
//import useAuth from '../Hooks/useAuth'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import Select from '../Components/Select'
import InputTwo from '../Components/Input2'
import Button2 from '../Components/Button2'
import InputPassword from '../Components/InputPassword'
import Date from '../Components/Date'

const Register = () => {

  //const { dispatch } = useAuth()

  const [f_name, setfname] = useState('');
  const [l_name, setlname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setcountry] = useState('Kenya');
  const [date, setdate] = useState('');
  const [role, setrole] = useState('Buyer');


  const [message, setmessage] = useState(null);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);


  const navigate = useNavigate();




  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.length > 3 && password.length > 3 && email.includes('@') && date && f_name && password === confirmPassword) {
      axios.defaults.withCredentials = true
      try {
        setloading(true)
        seterr(null)
        axios({
          method: 'post',
          url: process.env.REACT_APP_BASE + 'g/signup',
          data: { email, password, f_name, l_name, country, phone, confirmPassword, date, role }
        })
          .then((res) => {
            //console.log(res)
            setmessage(res.data.message)
            setloading(false)
            seterr(null)
            navigate('/app/login', { state: { regEmail: email, regPass: password }, replace: true })

          })
          .catch((err) => {
            if (err.code === 'ERR_BAD_REQUEST') {
              seterr(err.response.data.message)
            } else {
              //console.log(err)
              seterr(err.message)
            }
            setloading(false)
          })
      } catch (error) {
        console.log(error)
        //seterr(error)
        seterr('Please try Again')
      }
    } else {
      seterr('Invalid Credentials')
    }
  }

  const other = () => {
    seterr(null)
    setmessage(null)
  }

  const handleEmailChange = (e) => {
    setemail(e.target.value)
    other()
  }
  const handlePasswordChange = (e) => {
    setpassword(e.target.value)
    other()
  }
  const handleconfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
    other()
  }
  const handlefnameChange = (e) => {
    setfname(e.target.value)
    other()
  }
  const handlelnameChange = (e) => {
    setlname(e.target.value)
    other()
  }
  const handlephoneChange = (e) => {
    setphone(e.target.value)
    other()
  }
  const handlecountryChange = (e) => {
    setcountry(e.target.value)
    other()
  }
  const handleDateChange = (e) => {
    setdate(e.target.value)
    other()
  }
  const handleroleChange = (e) => {
    setrole(e.target.value)
    other()
  }

  return (
    <main className='Register'>
      <div className="regform">
        <div className="uiui">
          {/*<NavLink className='l-t-home' to='/' end>
            Home
          </NavLink>*/}
        </div>
        <form
          className="post-form"
          onSubmit={handleSubmit}>
          <InputTwo
            typ='text'
            name='f_name'
            officialName="First Name"
            changeHandler={handlefnameChange}
            isRequired={true}
            isAutoComplete={true}
            jval={f_name}
            stingo='InputTwo' />
          <InputTwo
            typ='text'
            name='l_name'
            officialName="Last Name"
            changeHandler={handlelnameChange}
            isRequired={true}
            isAutoComplete={true}
            jval={l_name}
            stingo='InputTwo' />
          <InputTwo
            typ='email'
            name='email'
            officialName="Email"
            changeHandler={handleEmailChange}
            isRequired={true}
            isAutoComplete={true}
            jval={email}
            stingo='InputTwo' />

          <InputPassword
            name='password'
            officialName="Password"
            changeHandler={handlePasswordChange}
            isRequired={true}
            isAutoComplete={true}
            jval={password}
          />

          <InputPassword
            name='confirmPassword'
            officialName="Confirm-Password"
            changeHandler={handleconfirmPasswordChange}
            isRequired={true}
            isAutoComplete={true}
            jval={confirmPassword}
          />
          <Date
            handler={handleDateChange}
            jval={date}
          />
          <InputTwo
            typ='tel'
            name='phone'
            officialName="Phone"
            changeHandler={handlephoneChange}
            isRequired={true}
            isAutoComplete={true}
            jval={phone}
            stingo='InputTwo' />
          <div className='locale2'>
            <Select handler={handlecountryChange} dt={['Kenya', 'Uganda', 'Tanzania']} />
            <Select handler={handleroleChange} dt={['Buyer', 'Seller']} />
          </div>
          {message
            ? <p className="msg-suc">{message}
            </p>
            : ''}
          {err
            ? <p className="msg-err">{err}</p>
            : ''}
          <Button2
            name='Register'
            dis={loading ? true : false}
            handler={handleSubmit}
          />

        </form>
        <NavLink className='l-t-signup' to='/app/login' end>
          LogIn
        </NavLink>
      </div>
    </main>
  )
}

export default Register
