import Container from './Pages/Container';
import './Styles/App.css';

import { useReducer, useEffect, useState } from 'react';
import authContext from './Context/authContext'
import WinSize from './Hooks/useSize';
import sizeContext from './Context/sizeContext';
import Navbar from './Components/Navbar';
import PNav from './Components/P_Nav';

function App() {

  const [showPNav, setshowPNav] = useState(false);
  //const [initUser, setinitUser] = useState({
  //  user_id: 0,
  //  f_name: '',
  //  l_name: '',
  //  ts: 0,
  //  picture: '',
  //  country: 0,
  //  role: '',
  //  auth: false,
  //});
  const getUser = () => {
    const ifo = JSON.parse(localStorage.getItem('user'))
    if (ifo) {

      return ifo
    } else {
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
    }
  }
  const [initUser, setinitUser] = useState(
    getUser())


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

  const [state, dispatch] = useReducer(userReducer, initUser)



  useEffect(() => {

    const ifo = JSON.parse(localStorage.getItem('user'))
    console.log(ifo)
    if (ifo) {

      dispatch({ type: 'login', payload: ifo })
      setinitUser(ifo)
    }



    //const getCookie = (cname) => {
    //  const name = cname + "=";
    //  const decodedCookie = decodeURIComponent(document.cookie);
    //  const ca = decodedCookie.split(';');
    //  for (let i = 0; i < ca.length; i++) {
    //    let c = ca[i];
    //    while (c.charAt(0) === ' ') {
    //      c = c.substring(1);
    //    }
    //    if (c.indexOf(name) === 0) {
    //      return c.substring(name.length, c.length);
    //    }
    //  }
    //  return "";
    //}
    //const cook = getCookie('mkuu')
    //console.log(cook)
    //if (cook.length >= 10) {
    //  dispatch({ type: 'login', payload: JSON.parse(cook) })
    //  setinitUser(JSON.parse(cook))
    //}
    return () => {

    };
  }, []);


  const appStingo = {}
  const contStingo = {}
  const coverStingo = {
    //height: wS.height,
    width: wS.width
  }

  return (
    <div className="App" style={appStingo}>
      <authContext.Provider value={{ state, dispatch }}>
        <sizeContext.Provider value={wS}>
          {!showPNav
            ? ''
            : <div
              className="cover"
              style={coverStingo}
              onClick={(e) => {
                //https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli
                if (e.pageX > 150) {
                  setshowPNav(false)
                }
                //console.log(e)
              }}>
              <PNav setshowPNav={setshowPNav} />
            </div>
          }
          <Navbar setshowPNav={setshowPNav} />
          <Container constStyle={contStingo} />
        </sizeContext.Provider>
      </authContext.Provider>
    </div>
  )
}

export default App;
