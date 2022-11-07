import React from 'react'
import InputTwo from '../Components/Input2'
import '../Styles/Anyny.css'



const Anyny = () => {
  return (
    <main className='Anyny'>
      <form action="" className='Anyny-form'  >
        <InputTwo typ='text'
          name='name'
          officialName="Product Name"
          //changeHandler={handleEmailChange}
          isRequired={true}
          isAutoComplete={true}
          //jval={email}
          stingo='InputTwo' />
      </form>
    </main>
  )
}

export default Anyny
