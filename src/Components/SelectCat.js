import React from 'react'

const SelectCat = ({
  response,
  state,
  handleCatChange,
  name,
  idvalue,
  namevalue
}) => {
  return (
    <div className='p-p-cat-comp util_flex'>
      <p>{name}:</p>
      <select
        value={state}
        name={name}
        onChange={handleCatChange}
        id="p-p-cat">
        {response
          ? response
            .sort((a, b) => {
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            })
            .map((cat) => {

              return <option key={cat[`${idvalue}`]} value={cat[`${idvalue}`]}>{cat[`${namevalue}`]}</option>
            })
          : ''
        }
      </select>
    </div>
  )
}

export default SelectCat
