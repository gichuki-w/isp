import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../Hooks/Ax'
import useAuth from '../Hooks/useAuth'

const Logout = () => {


  const { dispatch } = useAuth()
  const navigate = useNavigate();


  const axiosHookOptions = {
    url: 'g/signout',
    method: 'get',
    body: null,
    headers: null
  }

  const { response } = useAxios(axiosHookOptions)
  console.log(response)



  useEffect(() => {
    dispatch({ type: 'logout' })
    localStorage.clear();
    //document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    navigate('/')
    return () => {

    };
  });

  return (
    <div>
      logging out
    </div>
  )
}

export default Logout
