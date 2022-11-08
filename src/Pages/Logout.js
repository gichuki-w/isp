import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
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

  const { response, error, loading, msg, suc, errmsg } = useAxios(axiosHookOptions)
  console.log(response)

  const [cookies, removeCookie] = useCookies(['mkuu']);
  console.log(cookies.mkuu)

  removeCookie('mkuu')

  useEffect(() => {

    dispatch({ type: 'logout' })
    localStorage.clear();

    //const decodedCookie = decodeURIComponent(document.cookie);
    //const ca = decodedCookie.split(';');

    //console.log(ca)


    //document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString()); });
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
