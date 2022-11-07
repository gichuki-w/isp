import React from 'react'
import '../Styles/HomeProd.css'
import { useNavigate } from 'react-router-dom'


const ProdCard = ({ prod }) => {

  const cClass = `p_country ${prod.country === 'Kenya' ? 'ke' : prod.country === 'Uganda' ? 'ug' : prod.country === 'Tanzania' ? 'tz' : 'ke'}`

  const navigate = useNavigate();


  const handleProd = (e) => {
    console.log(e)
    navigate('/app/onernp', { replace: true, state: { prod } })
    //https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically
  }
  const handleCart = (e) => {
    console.log(e)
  }

  return (
    <div className='postcard'>
      <div className="p_picture">
        <img src={prod.picture} alt={prod.name} />
      </div>
      <div className="details">


        <div className={cClass}>
          {/*{prod.country}*/}
        </div>

        <button className="el p_name" onClick={handleProd}>
          {prod.name}
        </button>

        <div className="el p_county">
          <div className="loc"></div>
          {prod.county}
        </div>

        <div className="el p_b_desc">
          {prod.description}
        </div>
        <div className="el c3pio">
          <div className="el p_price split">
            <div className="bei">KSH</div>
            {prod.price}
          </div>
          <div className="el cartbtn split" onClick={handleCart}>
          </div>
        </div>



      </div>

    </div>
  )
}

export default ProdCard
