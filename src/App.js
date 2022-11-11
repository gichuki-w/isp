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
  const [showPostProd, setshowPostProd] = useState(false);

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
    //console.log(ifo)
    if (ifo) {

      dispatch({ type: 'login', payload: ifo })
      setinitUser(ifo)
    }
    return () => {

    };
  }, []);


  const appStingo = {}
  const contStingo = {}
  const coverStingo = {
    //height: wS.height,
    width: wS.width
  }
  const phoneNavigation = () => {
    //setshowPostProd(false)

    return (
      <div
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
    )
  }

  return (
    <div className="App" style={appStingo}>
      <authContext.Provider value={{ state, dispatch }}>
        <sizeContext.Provider value={wS}>
          {showPNav
            ? phoneNavigation()
            : ''
          }
          <Navbar setshowPNav={setshowPNav} />
          <Container constStyle={contStingo} />
        </sizeContext.Provider>
      </authContext.Provider>
    </div>
  )
}

export default App;
