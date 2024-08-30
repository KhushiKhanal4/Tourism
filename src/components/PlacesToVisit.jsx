import React from 'react'
import ImageCard from './ImageCard'

function PlacesToVisit() {
  return (
   <div>
    <h1 className='mx-4 my-5 text-3xl text-center font-bold'>Top Destinations</h1>

    <div className='grid grid-rows-2 grid-cols-1 gap-7 m-12 min-[444px]:grid-cols-2 sm:grid-cols-3 '>
      
  <ImageCard 
  url={"pexels-palumalerba-2426565 (1).jpg"}
  title={'Palumalerba Temple'}
  />
  <ImageCard 
  url={"pexels-oidonnyboy-3658663.jpg"}
  title={'Sekumpul Waterfall'}
  />
  <ImageCard 
  url={"pexels-joe-fikar-799933673-19137460.jpg"}
  title={'Diamond Beach, Nusa Penida'}
  />
  <ImageCard 
  url={"pexels-freestockpro-2166559.jpg"}
  title={'Pura Ulun Danu Bratan'}
  />
  <ImageCard 
  url={"pexels-freestockpro-2144326.jpg"}
  title={'Bali Handara Gate'}
  />
  <ImageCard 
  url={"pexels-timrael-2474689.jpg"}
  title={'Nusa Penida'}
  />

    </div>
   </div>
  )
}

export default PlacesToVisit