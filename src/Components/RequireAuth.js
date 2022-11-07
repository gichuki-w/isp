import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../Hooks/useAuth";



const RequireAuth = () => {
  const { state } = useAuth()
  const { auth } = state

  const location = useLocation();

  return (
    auth
      ? <Outlet />
      : <Navigate to='login' state={{ from: location }} replace />
  )
}


export default RequireAuth





//auth
//  ? role === 'Admin'
//    ? <Outlet />
//    : role === 'Farmer'
//      ? <Outlet />
//      : role === 'Customer'
//        ? <Outlet />
//        : <Navigate to='login' state={{ from: location }} replace />
//  : <Navigate to='login' state={{ from: location }} replace />
