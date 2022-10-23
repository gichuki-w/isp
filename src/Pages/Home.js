import React from 'react'
import '../Styles/Home.css'

//const nums = ['LiveStok', 'Fishery', 'AgroChemicals', 'Cash Crops', 'Animal Feeds', 'Fruits', 'Nuts and Kernels', 'Pets', 'Vegetables', 'Tools and Equipmeny', 'Herbs', 'Poultry', 'Food Crop', 'Cerials', 'Livestock Feeds', 'Hive Products', 'Flowers', 'Seeds', 'Seedlings', 'Other']


const Home = () => {
  return (
    <main className='Home' >

      <header className='header'>
        <h1 className='hh1'>Search for a product</h1>
        <form className='sForm'>
          <label className='label' htmlFor="search">Search: </label>
          <input placeholder='search' type="text" id="search" />
        </form>
      </header>

      <section className='homePoducts'>

      </section>
      <section className='homePoducts2'>

      </section>

      <div className="call">
      </div>
    </main>
  )
}

export default Home
