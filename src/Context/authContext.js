import { createContext } from "react";

const init = {
  user_id: 0,
  role: 'user',
  user_name: 'Doe',
  auth: true
}


const authContext = createContext(init)

export default authContext
