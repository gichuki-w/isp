import Container from './Pages/Container';
import './Styles/App.css';

import { useReducer, useEffect } from 'react';
import authContext from './Context/authContext'
import WinSize from './Hooks/useSize';
import sizeContext from './Context/sizeContext';
import Navbar from './Components/Navbar';
const userInit = {
  user_id: 0,
  f_name: 'John',
  l_name: '',
  ts: 0,
  picture: '',
  country: 0,
  role: 'Customer',
}

function App() {

  const { wS } = WinSize()

  const userReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          user_id: action.payload.user_id,
          f_name: action.payload.f_name,
          l_name: action.payload.l_name,
          ts: action.payload.ts,
          picture: action.payload.picture,
          country: action.payload.country,
          role: action.payload.role,
          auth: true,
        }
      case "logout":
        return {
          user_id: 0,
          f_name: '',
          l_name: '',
          ts: 0,
          picture: '',
          country: 0,
          role: '',
          auth: false,
        }
      default:
        return state;
    }
  };


  const [state, dispatch] = useReducer(userReducer, userInit)




  useEffect(() => {
    const getCookie = (cname) => {
      const name = cname + "=";

      const decodedCookie = decodeURIComponent(document.cookie);

      const ca = decodedCookie.split(';');

      for (let i = 0; i < ca.length; i++) {

        let c = ca[i];

        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    const cook = getCookie('user')

    if (cook.length >= 20) {
      dispatch({ type: 'login', payload: JSON.parse(cook) })
    }

    //handle fetch user object if front end cookie is present
    return () => {

    };
  }, []);

  //const calcContWidth = () => {
  //  if (wS.width >= 1500) {
  //    return 1500
  //  } else if (wS.width < 1500 && wS.width > 600) {
  //    return (wS.width * 0.9)
  //  } else if (wS.width < 700) {
  //    return wS.width
  //  }
  //}
  const appStingo = {
    height: wS.height,
    width: wS.width
  }
  const contStingo = {
    minHeight: wS.height,
    width: wS.width
  }



  return (
    <div className="App" style={appStingo}>
      <authContext.Provider value={{ state, dispatch }}>
        <sizeContext.Provider value={wS}>
          <Navbar />
          <Container constStyle={contStingo} />
        </sizeContext.Provider>
      </authContext.Provider>
    </div>
  )
}

export default App;
