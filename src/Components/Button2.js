import React from 'react'
import '../Styles/Button2.css'

const Button2 = ({ dis, handler, name }) => {
  return (
    <button
      className="button-89"
      onClick={handler}
      disabled={dis ? true : false}

    >{name}</button>
  )
}

export default Button2
