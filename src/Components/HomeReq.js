import React from 'react'
import ReqCard from './ReqCard'
import '../Styles/HomeReq.css'
import useAxios from '../Hooks/Ax'

const HomeReq = () => {


  const axiosHookOptions = {
    url: 'un/req',
    method: 'get',
    body: null,
    headers: null
  }

  const { response, error, loading, msg, suc, errmsg } = useAxios(axiosHookOptions)
  //console.log(response)


  return (
    <div className='HomeReq'>
      {response?.map(v => (
        <ReqCard key={v.request_id} request={v} />
      ))}
    </div>
  )
}

export default HomeReq
