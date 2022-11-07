// useAxios hook

import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = ({ url, method = '', body = null, headers = null, }) => {
  //console.log(method)
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const [msg, setmsg] = useState(null);
  const [suc, setsuc] = useState(null);
  const [errmsg, seterrmsg] = useState(null);
  const [rudia, setrudia] = useState(false);


  const fetchData = () => {
    axios.defaults.withCredentials = true
    const fullpath = process.env.REACT_APP_BASE + url
    axios[method](fullpath, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data.payload ? res.data.payload : null);
        setmsg(res.data.message ? res.data.message : null)
        setsuc(res.data.success ? res.data.success : null)
        setloading(false);
      })
      .catch((err) => {
        setError(err);
        seterrmsg(err.message ? err.message : null)
        setloading(false);
      })
      .finally(() => {
        setloading(false);
        setrudia(false)

      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers, rudia]);

  return { response, error, loading, msg, suc, errmsg, setrudia };
};

export default useAxios;
