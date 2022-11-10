import React, { useContext, useState } from 'react'
import '../Styles/FPost.css'
import sizeContext from '../Context/sizeContext';
import PostProductF from '../Components/PostProductF';



const FPost = () => {


  const wS = useContext(sizeContext)


  return (
    <div className='FPost'>
      <div className="f-post-form">
        {wS.width < 600
          ? ''
          : <div className="f-pic">
          </div>
        }
        <PostProductF />


      </div>
    </div>
  )
}

export default FPost
