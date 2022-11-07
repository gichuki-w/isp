import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import '../Styles/HomeReq.css'

const ReqCard = ({ request }) => {
  return (
    <div className='requestcard'>
      <div className="details">
        <div className="r_country">
        </div>
        <div className="el r_name">
          {request.name}
        </div>
        <div className="el r_county">
          <IoLocationOutline />
        </div>
        <div className="el r_weight">
        </div>
        <div className="el r_desc">
        </div>
        <div className="el r_cat">
        </div>
        <div className="el r_timeline">
        </div>
      </div>

    </div>
  )
}

export default ReqCard
