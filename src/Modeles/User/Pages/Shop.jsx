import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/popular/Popular'
import Offer from '../Component/Offers/Offer'
import NewCollection from '../Component/NewCollections/NewCollection'
import NewsLetter from '../Component/NewsLetter/NewsLetter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
     <Offer/>
     <NewCollection/>
     <NewsLetter/>
    </div>
  )
}

export default Shop
