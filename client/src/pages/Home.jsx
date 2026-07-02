import React from 'react'
import Hero from '../components/Hero'
import Restaurants from '../components/Restaurants'
import CravingByNumber from '../components/CravingByNumber'

const Home = () => {
  return (
<>
    <div>
      <Hero/>
      <Restaurants/>
      <CravingByNumber/>
    </div>
</>
  )
}

export default Home