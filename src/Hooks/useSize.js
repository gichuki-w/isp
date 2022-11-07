import { useEffect, useState } from 'react';

const WinSize = (options) => {

  const [wS, setWS] = useState(getWindowSize());

  //console.log("useSizeHook")
  useEffect(() => {
    const handleWindowResize = () => {
      setWS(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { wS }
}


const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
}
export default WinSize
