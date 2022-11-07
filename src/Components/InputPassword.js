import '../Styles/InputPassword.css'
import { useState } from 'react';

const InputPassword = ({ typ, name, officialName, changeHandler, isRequired, isAutoComplete, jval, stingo }) => {

  const [see, setsee] = useState(false);


  return (
    <div className='InputPassword'>
      <label htmlFor={name}>{officialName}:</label>
      <input
        autoComplete={isAutoComplete ? 'on' : null}
        required={isRequired ? true : null}
        type={see ? 'text' : 'password'}
        name={name}
        value={jval}
        onChange={changeHandler}
        id={name}
        placeholder={officialName ? officialName : 'Input'} />
      <div className="jina">
        <div className="ppic kalogo">
        </div>
        {officialName}
      </div>
      <div
        onClick={(e) => {
          setsee(!see)
        }}
        className={see
          ? 'ppic kapicha'
          : 'ppic kapicha2'}
      ></div>

    </div>
  )
}

export default InputPassword
