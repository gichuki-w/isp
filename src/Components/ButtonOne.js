import React from 'react'

const ButtonOne = ({ dis, handler, stingo, name }) => {


  return (
    <button
      className={stingo}
      disabled={dis ? true : false}
      onClick={handler}
    >{name ? name : 'Button'}</button>
  )
}

export default ButtonOne
