import React, { useState } from 'react'
import '../Styles/HomeProd.css'
import useAxios from '../Hooks/Ax'
import ProdCard from './ProdCard'
import Loading1 from './Loading1'



const HomeProd = () => {
  //const [refresh, setrefresh] = useState(false);

  const opt = {
    url: 'u/product',
    method: 'get',
    body: null,
    headers: null,
  }

  const { response, error, loading, msg, suc, errmsg, setrudia } = useAxios(opt)

  const handleRetry = (e) => {
    e.preventDefault()
    setrudia(true)
  }


  return (
    <section className='HomeProd'>
      {loading ? <Loading1 /> : response
        ? response?.map((v) => (
          <ProdCard key={v.product_id} prod={v} />
        ))
        : errmsg ? <p className='err'>{errmsg}, <button onClick={handleRetry}>Try Again</button></p> : msg ? <p>{msg}</p> : <Loading1 />
      }
    </section>
  )
}

export default HomeProd
