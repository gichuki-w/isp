
import '../Styles/Input2.css'
const InputTwo = ({ typ, name, officialName, changeHandler, isRequired, isAutoComplete, jval, stingo }) => {


  return (
    <div className={stingo}>
      <label htmlFor={name}>{officialName}:</label>
      <input
        autoComplete={isAutoComplete ? 'on' : null}
        required={isRequired ? true : null}
        type={typ}
        name={name}
        value={jval}
        onChange={changeHandler}
        id={name}
        placeholder={officialName ? officialName : 'Input'}
      />
      <div className="kajina">{officialName}</div>
    </div>
  )
}
export default InputTwo
