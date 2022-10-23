import { useContext } from "react";

import authContext from '../Context/authContext'

const useAuth = () => {
  return useContext(authContext)
}


export default useAuth
