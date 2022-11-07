import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../Hooks/useAuth";



const AuthCustomer = () => {
  const { state } = useAuth()
  const { role } = state
  const location = useLocation();

  return (
    role === 'Buyer'
      ? <Outlet />
      : <Navigate to='login' state={{ from: location }} replace />
  )
}


export default AuthCustomer





//auth
//  ? role === 'Admin'
//    ? <Outlet />
//    : role === 'Farmer'
//      ? <Outlet />
//      : role === 'Customer'
//        ? <Outlet />
//        : <Navigate to='login' state={{ from: location }} replace />
//  : <Navigate to='login' state={{ from: location }} replace />
