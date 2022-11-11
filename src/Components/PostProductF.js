import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useAxios from '../Hooks/Ax'
import SelectCat from './SelectCat'



// 3 objects { product, images, specs}






const PostProductF = () => {

  const opt = {
    url: 'g/category',
    method: 'get',
    body: null,
    headers: null,
  }
  const { response, error, loading, msg, suc, errmsg, setrudia } = useAxios(opt)

  //const fileRef = useRef()

  const [invalid, setinvalid] = useState(null);

  const [name, setname] = useState('');
  const [category, setcategory] = useState(22);
  const [description, setdescription] = useState('');
  const [price, setprice] = useState(0);
  const [unit, setunit] = useState(3);
  const [weight, setweight] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [length, setlength] = useState(0);
  const [height, setheight] = useState(0);
  const [color, setcolor] = useState('');
  const [transpo, settranspo] = useState(1);
  const [file, setfile] = useState(null);
  const [tupicha, settupicha] = useState([]);

  const [onyesha, setonyesha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    //data validations

    //name && AnimationEffect.length
    //  ? category && category !== 0
    //    ? description && description.length
    //      //? '' continue checking
    //      : ''
    //    : ''
    //  : ''


    // axios


    console.log('Submitting')


  }





  const handleNameChange = (e) => {
    console.log('name change')
    setname(e.target.value)
  }
  const handleCatChange = (e) => {

    setcategory(e.target.value)
  }
  const handleDescChange = (e) => {
    setdescription(e.target.value)
  }
  const handlePriceChange = (e) => {
    setprice(e.target.value)
  }
  const handleUnitChange = (e) => {
    setunit(e.target.value)
  }
  const handleWeightChange = (e) => {
    setweight(e.target.value)
  }
  const handleQuantityChange = (e) => {
    setquantity(e.target.value)
  }

  const handleHeightChange = (e) => {
    setheight(e.target.value)
  }
  const handleLengthChange = (e) => {
    setlength(e.target.value)
  }
  const handleColorChange = (e) => {
    setcolor(e.target.value)
  }
  const handleTranspoChange = (e) => {
    settranspo(e.target.value)
  }
  const handleFileChange = (e) => {

    setfile(e.target.files)
    //e.target.files.id = 1
    //console.log(e.target.files)

    Object.entries(e.target.files)
      .map(([key, value], i) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          //console.log(e)
          setonyesha(true)
          settupicha((prev) => [...prev, {
            loaded: e.total,
            result: e.target.result,
            key: key,
            value: value
          }])
          //console.log(key)
        }
        reader.readAsDataURL(value)
        //console.log(reader)
      })
    settupicha([])
    setonyesha(false)


  }
  //console.log(tupicha)

  return (
    <div className="f-post-details util_flex">
      <form
        onSubmit={handleSubmit}
        className='p-prod-form util_flex'>

        <div className="p-pheader">Post Product</div>

        <div className="name-cat">
          <div className="p-prod-name util_flex">
            <label htmlFor="p-p-name">Product Name:</label>
            <input
              type="text"
              id='p-p-name'
              required="required"
              value={name}
              onChange={handleNameChange}
              placeholder='Product Name' />
          </div>
          <SelectCat
            name='Category'
            state={category}
            handleCatChange={handleCatChange}
            idvalue='category_id'
            namevalue='name'
            response={response} />
        </div>

        <div className="p-desc util_flex">
          <label htmlFor="p-p-description">Description:</label>
          <textarea
            required="required"
            type="text"
            value={description}
            onChange={handleDescChange}
            id='p-p-description'
            placeholder='Description' >
          </textarea>
        </div>

        <div className="price-unit">

          <div className="p-prod-price util_flex">

            <label htmlFor="p-p-price">Price:</label>
            <input
              type="number"
              value={price}
              id='p-p-price'
              onChange={handlePriceChange}
              required="required"

              placeholder='Price' />
          </div>
          <div className="p-p-prod-price-sel util_flex">
            <SelectCat
              name='Price Per'
              state={unit}
              handleCatChange={handleUnitChange}
              idvalue='unit_id'
              namevalue='name'
              response={[
                {
                  unit_id: 1,
                  name: 'Kilogram'
                },
                {
                  unit_id: 2,
                  name: 'Grams'
                },
                {
                  unit_id: 3,
                  name: 'Whole'
                },
                {
                  unit_id: 4,
                  name: 'Bag'
                }
              ]} />
          </div>

        </div>

        <div className="p-p-specs">
          <div className="p-p-weight util_flex">

            <label htmlFor="p-p-weight">Weight:</label>
            <input
              value={weight}
              onChange={handleWeightChange}
              type="number"
              id='p-p-weight'
              placeholder='-'
              required="required"
            />


          </div>
          <div className="p-p-quantity util_flex">

            <label htmlFor="p-p-quantity">Quantity:</label>
            <input
              value={quantity}
              onChange={handleQuantityChange}
              type="number"
              placeholder='-'
              id='p-p-quantity'
              required="required"
            />


          </div>
          <div className="p-p-length util_flex">

            <label htmlFor="p-p-length">Length:</label>
            <input
              value={length}
              onChange={handleLengthChange}
              type="number"
              placeholder='-'
              id='p-p-length'
              required="required"
            />


          </div>
          <div className="p-p-height util_flex">

            <label htmlFor="p-p-height">Height:</label>
            <input
              value={height}
              onChange={handleHeightChange}
              type="number"
              placeholder='-'
              id='p-p-height'
              required="required"
            />


          </div>
          <div className="p-p-color util_flex">

            <label htmlFor="p-p-color">Color:</label>
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
              id='p-p-color'
              required="required"
            />
          </div>
        </div>

        <div className="p-p-tupicha util_flex">
          <div className="style-tupicha util_flex">
            <div className="p-p-p-bg"></div>
            <p>
              Add image
            </p>
            <input
              type="file"
              name="filefield"
              accept="image/*"
              capture
              multiple="multiple"
              onChange={handleFileChange}
            //ref={fileRef}
            />
          </div>
          <div
            className="chosen-images"
            style={{
              visibility: onyesha ? 'visible' : 'hidden',
              opacity: onyesha ? 1 : 0
            }}>
            {tupicha.map((p) => {
              return (
                <div key={p.loaded} className='user_pic'>
                  <img
                    src={p.result}
                    alt='pic' />
                  <div className="user_pic_name">
                    {p.value.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="p-p-transport util_flex">
          <SelectCat
            name='Delivery'
            state={transpo}
            handleCatChange={handleTranspoChange}
            idvalue='transpo_id'
            namevalue='name'
            response={[
              {
                transpo_id: 1,
                name: 'I offer Delivery'
              },
              {
                transpo_id: 2,
                name: 'I do not have delivery'
              },
              {
                transpo_id: 3,
                name: 'Delivery to be negotiated'
              },
              {
                transpo_id: 4,
                name: 'Request pick up'
              }
            ]} />
        </div>

        {invalid
          ? <div className='invalid_dt'> {invalid}</div>
          : ''
        }
        <button
          onClick={handleSubmit}
          className='p-p--p-btn'>Post Product</button>
      </form>
    </div >
  )
}

export default PostProductF
