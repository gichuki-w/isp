import { useState } from 'react'
import '../Styles/Login.css'
import useAuth from '../Hooks/useAuth'
import axios from 'axios'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import InputTwo from '../Components/Input2'
import Button2 from '../Components/Button2'
import InputPassword from '../Components/InputPassword'

const Login = () => {

  const { dispatch } = useAuth()

  const location = useLocation()

  const [email, setemail] = useState(location.state?.regEmail ? location.state.regEmail : '');
  const [password, setpassword] = useState(location.state?.regPass ? location.state.regPass : '');
  const [message, setmessage] = useState(null);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);


  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.length > 3 && password.length >= 3 && email.includes('@')) {
      axios.defaults.withCredentials = true
      try {
        setloading(true)
        seterr(null)
        axios({
          method: 'post',
          url: process.env.REACT_APP_BASE + 'g/login',
          data: { email, password }
        })
          .then((res) => {
            console.log(res)
            setmessage(res.data.message)
            setloading(false)
            seterr(null)
            if (res.data.success) {
              dispatch({ type: 'login', payload: res.data.user })
              //const ex = new Date() + (1000 * 60 * 2)
              //const cook = `mkuu=${JSON.stringify({ ...res.data.user, auth: true })}; expires=${ex}; path=/`
              //document.cookie = cook
              localStorage.setItem('user', JSON.stringify({ ...res.data.user, auth: true }));
              navigate('/', { replace: true })
            }
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
      seterr('Invalid Email or passsword')
    }
  }



  const handleEmailChange = (e) => {
    setemail(e.target.value)
    seterr(null)
    setmessage(null)
  }
  const handlePasswordChange = (e) => {
    setpassword(e.target.value)
    seterr(null)
    setmessage(null)
  }



  return (
    <main className='Login'>
      <div className="login-form">
        {message
          ? <p className="msg">{message}</p>
          : ''}
        {err
          ? <p className="msg">{err}</p>
          : ''}
        <div className="uili"></div>
        <form
          className="post-form-login"
          onSubmit={handleSubmit}>
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
          <Button2
            name='Login'
            dis={loading ? true : false}
            handler={handleSubmit}
          />
        </form>
        <NavLink className='l-t-signup' to='/app/signup' end>
          Sign Up ?
        </NavLink>
      </div>
    </main>
  )
}

export default Login
