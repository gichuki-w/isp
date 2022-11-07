import React from 'react'
import '../Styles/Select.css'

const Select = ({ handler, dt }) => {



  return (

    <div >
      <select onChange={handler} defaultValue='Kenya'>
        {dt ? dt.map(v => {
          return <option key={v} value={v} >{v}</option>
        }) : ''}
        {/*<option value="Tanzania">Tanzania</option>*/}
        {/*<option value="Uganda">Uganda</option>*/}
      </select>
    </div>

  )
}

export default Select



