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



      
      <div className='max-w-96 hover:-translate-y-5 hover:opacity-80 cursor-pointer'>
        
        <img src="pexels-oidonnyboy-3658663.jpg" 
        alt=""
        className='rounded-2xl'
         />

      </div 
      >
      
      <div className='max-w-96 hover:-translate-y-5 hover:opacity-80 cursor-pointer'>
        
        <img src="pexels-joe-fikar-799933673-19137460.jpg" 
        alt=""
        className='rounded-2xl'
         />

      </div>

      
      <div className='max-w-96 hover:-translate-y-5 hover:opacity-80 cursor-pointer'>
        
        <img src="pexels-freestockpro-2166559.jpg" 
        alt=""
        className='rounded-2xl'
         />

      </div>

      
      <div className='max-w-96 hover:-translate-y-5 hover:opacity-80 cursor-pointer'>
        
        <img src="pexels-freestockpro-2144326.jpg" 
        alt=""
        className='rounded-2xl'
         />

      </div>

      
      <div className='max-w-96 hover:-translate-y-5 hover:opacity-80 cursor-pointer'>
        
        <img src="pexels-timrael-2474689.jpg" 
        alt=""
        className='rounded-2xl'
         />

      </div>


    </div>
   </div>
  )
}

export default PlacesToVisit