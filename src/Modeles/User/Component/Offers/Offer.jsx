import React from 'react'
import './Offerce.css'
import exclucive_img from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
      </div>
      <div className="offers-right">
    <img src={exclucive_img} />
      </div>
    </div>
  )
}

export default Offer
