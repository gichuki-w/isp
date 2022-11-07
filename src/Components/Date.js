import React from 'react'
import '../Styles/Date.css'

const Date = ({ handler, jval }) => {
  return (
    <div className='tarehe'>
      Date of Birth:
      <input
        type="date"
        name='dob'
        value={jval}
        min="1960-01-01"
        max="2023-01-01"
        required
        onChange={handler} />
    </div>
  )
}

export default Date
